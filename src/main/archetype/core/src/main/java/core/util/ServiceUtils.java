package ${package}.core.util;

import java.util.Arrays;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.dam.api.Asset;
import com.day.cq.wcm.api.Page;

/**
 * Assorted mix of helper methods. 
 * 
 * @author joelepps
 *
 */
public class ServiceUtils {
    
    private static final Logger log = LoggerFactory.getLogger(ServiceUtils.class);
    
/* 
 * NOT CURRENTLY USED 
 */
//      // TODO: UPDATE ME!
//    public static final String HOMEPAGE_CONTENT_TYPE = "";
//    
//    /**
//     * Get the home page associated with this page. Home page must have the {@link #HOMEPAGE_CONTENT_TYPE}.
//     * <p>
//     * Order of Precedence:<p>
//     * 1. {@code override} value (even if it is not the correct homepage template)<br>
//     * 2. Test 3rd level parent node. 3rd level would be /content/[project-name]/en_us<br>
//     * 3. Test 2nd level parent node. 2nd level would be /content/[project-name]<br>
//     * 4. Use current page.<br>
//     */
//    public static Page getHomePage(Page currentPage, String override) {
//        Page homePage = null;
//        
//        if (!StringUtils.isBlank(override)) {
//            homePage = currentPage.getPageManager().getPage(override);
//            if (homePage != null) return homePage;
//        }
//        
//        if (homePage == null) homePage = currentPage.getAbsoluteParent(2);
//        
//        if (homePage == null || !isHomePage(homePage)) homePage = currentPage.getAbsoluteParent(1);
//        
//        if (homePage == null || !isHomePage(homePage)) homePage = currentPage;
//
//        return homePage;
//    }
//    
//    private static boolean isHomePage(Page page) {
//        String templateProperty = "";
//        if (page != null) {
//            ValueMap pageProperties = page.getProperties();
//            templateProperty = pageProperties.get(NameConstants.PN_TEMPLATE, "");
//            return (templateProperty.endsWith(HOMEPAGE_CONTENT_TYPE));
//        }
//        
//        return false;
//    }
    
    /**
     * Parses out a page's jcr:content node.
     * <p>
     * If jcr:content is not on the path, it's assumed path is to the page
     * itself and jcr:content is appended.
     * <p>
     * This method does not validate existence of returned path.
     * 
     * @param path Path to evaluate
     * @return jcr:content path
     */
    public static String getJcrContentPath(String path) {
        if (StringUtils.isBlank(path)) return null;
        
        if (path.endsWith("jcr:content")) return path;
        
        int idx = path.indexOf("/jcr:content");
        if (idx >= 0) {
            return path.substring(0, idx+"/jcr:content".length());
        }
        
        idx = path.indexOf("/jcr:frozenNode");
        if (idx >= 0) {
            return path.substring(0, idx+"/jcr:frozenNode".length());
        }
        
        if (!path.endsWith("/")) path += "/";
        return path + "jcr:content";
    }
    
    /**
     * Append the html extension to a {@code url}.
     * 
     * @param request Sling request
     * @param url URL to evaluate
     * @return URL with extension (if needed)
     */
    public static String appendLinkExtension(SlingHttpServletRequest request, String url) {
        Resource resource = request.getResourceResolver().getResource(url);
        String result = url;
        if (resource != null) {
            Page page = resource.adaptTo(Page.class);
            if (page != null) {
                result = url + ".html";
            } else {
                Asset asset = resource.adaptTo(Asset.class);
                if (asset != null) {
                    if (asset.getMetadata().containsKey("dc:url")) {
                        if (!asset.getMetadataValue("dc:url").isEmpty()) {
                            result = asset.getMetadataValue("dc:url");
                        }
                    }
                }
            }
        }
        
        log.trace("Append link extension: {} -> {}", url, result);
        return result;
    }
    
    public static boolean isOoyalaVideoId(String candidate) {
        if (candidate == null) return false;
        boolean match = candidate.matches("^[a-zA-Z0-9\\-\\_]+$");
        log.trace("{} is ooyala video: {}", candidate, match);
        return match;
    }

    /**
     * Pick the first non-null and non-empty string.
     * 
     * @param strings Strings to coalesce
     * @return first non-null, non-empty string
     */
    public static String coalesce(String... strings) {
        if (strings == null || strings.length == 0) return null;
        for (String s : strings) {
            if (!StringUtils.isBlank(s)) return s;
        }
        return null;
    }
    
    /**
     * Concatenate multiple strings into one. Skips any null or empty strings. 
     * 
     * @param delimiter Delimeter string
     * @param strings Array of strings
     * 
     * @return Concatonated string
     */
    public static String concat(String delimiter, String... strings) {
        if (strings == null || strings.length == 0) return null;
        if (StringUtils.isBlank(delimiter)) delimiter = ",";
        
        StringBuilder sb = new StringBuilder();
        for (String s : strings) {
            if (StringUtils.isNotBlank(s)) {
                sb.append(s).append(delimiter);
            }
        }
        
        if (sb.length() > 0) {
            //fence post, remove trailing delimiter
            return sb.substring(0, sb.length()-delimiter.length()); 
        } else {
            return null;
        }
    }
    
    public static String combine(String... strings) {
        return Arrays.stream(strings).collect(Collectors.joining(" "));
    }
    
}
