package ${package}.core.util;

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
    
}
