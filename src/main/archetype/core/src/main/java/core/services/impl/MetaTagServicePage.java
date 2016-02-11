package ${package}.core.services.impl;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.commons.Externalizer;
import com.day.cq.commons.inherit.HierarchyNodeInheritanceValueMap;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.tagging.JcrTagManagerFactory;
import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import com.day.cq.wcm.api.NameConstants;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import ${package}.core.models.data.MetaTag;
import ${package}.core.services.MetaTagService;
import ${package}.core.util.ImageRendition;

/**
 * Builds meta tags for pages.
 * <p>
 * Automatically included as part of {@link MetaTagServiceWrapperImpl}
 * 
 * @author joelepps
 *
 */
@Component(immediate = true, metatype = false, label="Page Meta Tag Service", description="Meta tag service for pages")
@Service(MetaTagService.class)
@Properties({
        @Property(name = "service.vendor", value = "Hero Digital"),
        @Property(name = "service.description", value = "Meta tag service for pages")
})
public class MetaTagServicePage implements MetaTagService<Page> {
    
    private static final Logger log = LoggerFactory.getLogger(MetaTagServicePage.class);
    
    public static final String SEO_DESCRIPTION = "seoDescription";
    public static final String SEO_PAGE_TITLE = "seoPageTitle";
    public static final String SEO_PAGE_TITLE_SUFFIX = "seoTitleSuffix";
    public static final String SEO_TWITTER_HANDLE = "seoTwitterHandle";
    public static final String ANALYTICS_PAGE_ID = "pageID";
    public static final String ROBOTS_OPTIONS = "robotsOptions";
    
    @Reference
    private JcrTagManagerFactory tagManagerFactory;
    
    @Reference
    private Externalizer externalizer;

    @Override
    public Optional<Page> adaptToType(Resource jcrContent) {
        if (MetaTagServiceGeneric.isSupportedBasic(jcrContent)) {
            PageManager pageManager = jcrContent.getResourceResolver().adaptTo(PageManager.class);
            Page page = pageManager.getContainingPage(jcrContent);
            log.debug("Supported: {}", jcrContent.getPath());
            return Optional.of(page);
        }
        log.debug("Not Supported: {}", jcrContent);
        return Optional.empty();
    }

    @Override
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(Page page, Resource jcrContent, Locale requestLocale) throws MetaTagServiceException {
        log.debug("Building meta tags for {}", jcrContent);
        
        // Setup commonly used variables
        ValueMap valueMap = page.getProperties();
        InheritanceValueMap iValueMap = new HierarchyNodeInheritanceValueMap(jcrContent);
        Tag[] rawTags = getTags(jcrContent);
        
        Map<MetaTag.Tag, MetaTag> tags = new HashMap<>();
        
        // general meta tags
        MetaTagServiceGeneric.addMetaTag(tags, buildBaseTitle(jcrContent, valueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildTitle(jcrContent, valueMap, iValueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildDescription(valueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildLocale(page));
        MetaTagServiceGeneric.addMetaTag(tags, buildUrl(externalizer, jcrContent.getResourceResolver(), page));
        MetaTagServiceGeneric.addMetaTag(tags, buildContentType(valueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildTags(rawTags));
        MetaTagServiceGeneric.addMetaTag(tags, buildPageID(valueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildRobotsOptions(valueMap));
        
        // social
        MetaTagServiceGeneric.addMetaTag(tags, new MetaTag(MetaTag.Tag.OG_TYPE, "website"));
        MetaTagServiceGeneric.addMetaTag(tags, new MetaTag(MetaTag.Tag.TWITTER_CARD, "summary"));
        MetaTagServiceGeneric.addMetaTag(tags, buildOpenGraphImage(externalizer, jcrContent, valueMap));
        MetaTagServiceGeneric.addMetaTag(tags, buildTwitterSiteHandle(iValueMap));
        
        return tags;
    }

    @Override
    public int getPriority() {
        return 10;
    }
    
    /*
     * +++++++++++++++++++++++
     * TAG HELPER METHODS
     * +++++++++++++++++++++++
     */
    
    private Tag[] getTags(Resource jcrContent) {
        if (jcrContent == null) return new Tag[0];
        ResourceResolver resolver = jcrContent.getResourceResolver();
        if (resolver == null) return new Tag[0];
        Session session = resolver.adaptTo(Session.class);
        if (session == null) return new Tag[0];
        
        TagManager tagManager = tagManagerFactory.getTagManager(session);
        Tag[] tags = tagManager.getTags(jcrContent);
        return tags;
    }
    
    private static MetaTag buildBaseTitle(Resource jcrContent, ValueMap valueMap) {
        String title = valueMap.get(NameConstants.PN_PAGE_TITLE, String.class);
        if (StringUtils.isBlank(title)) title = valueMap.get(NameConstants.PN_TITLE, String.class);
        if (StringUtils.isBlank(title)) title = jcrContent.getParent().getName();
        
        log.trace("Base Title: {}", title);
        return new MetaTag(MetaTag.Tag.BASE_TITLE, title);
    }
    
    private static MetaTag[] buildTitle(Resource jcrContent, ValueMap valueMap, InheritanceValueMap iValueMap) {
        String title = valueMap.get(SEO_PAGE_TITLE, String.class);
        if (StringUtils.isBlank(title)) {
            title = valueMap.get(NameConstants.PN_PAGE_TITLE, String.class);
            if (StringUtils.isBlank(title)) title = valueMap.get(NameConstants.PN_TITLE, String.class);
            if (StringUtils.isBlank(title)) title = jcrContent.getParent().getName();
        } else {
            String titleSuffix = iValueMap.get(SEO_PAGE_TITLE_SUFFIX, "");
            if (!StringUtils.isBlank(titleSuffix)) {
                title += titleSuffix;
            }
        }
        
        log.trace("Title: {}", title);
        return new MetaTag[]{
            new MetaTag(MetaTag.Tag.TITLE, title),
            new MetaTag(MetaTag.Tag.OG_TITLE, title)
        };
    }
    
    private static MetaTag[] buildDescription(ValueMap valueMap) {
        String description = valueMap.get(SEO_DESCRIPTION, String.class);
        if (StringUtils.isBlank(description)) description = valueMap.get(NameConstants.PN_DESCRIPTION, String.class);
        
        log.trace("Description: {}", description);
        return new MetaTag[]{
            new MetaTag(MetaTag.Tag.DESCRIPTION, description), 
            new MetaTag(MetaTag.Tag.OG_DESCRIPTION, description)
        };
    }
    
    private static MetaTag buildLocale(Page page) {
        Locale locale = page.getLanguage(false);
        if (locale != null) {
            log.trace("Locale: {}", locale.toLanguageTag());
            return new MetaTag(MetaTag.Tag.LOCALE, locale.toLanguageTag());
        }
        return null;
    }
    
    private static MetaTag[] buildUrl(Externalizer externalizer, ResourceResolver resolver, Page page) {
        String path = resolver.map(page.getPath()) + ".html";
        String url = externalizer.publishLink(resolver, page.getPath()+".html");
        
        log.trace("Canonical URL for {} is {}", page.getPath(), url);
        
        return new MetaTag[]{
            new MetaTag(MetaTag.Tag.CANONICAL_URL, url),
            new MetaTag(MetaTag.Tag.OG_URL, url),
            new MetaTag(MetaTag.Tag.PATH, path)
        };
    }
    
    private static MetaTag buildTwitterSiteHandle(InheritanceValueMap iValueMap) {
        String handle = iValueMap.get(SEO_TWITTER_HANDLE, String.class);
        
        log.trace("Handle: {}", handle);
        return new MetaTag(MetaTag.Tag.TWITTER_SITE, handle);
    }
    
    private static MetaTag buildOpenGraphImage(Externalizer externalizer, Resource jcrContent, ValueMap valueMap) {
        String pageImage = valueMap.get("image/fileReference", String.class); // page image
        
        String imgUrl = null;
        if (pageImage != null) {
            imgUrl = externalizer.publishLink(jcrContent.getResourceResolver(), ImageRendition.SQUARE_MEDIUM.getRendition(pageImage));
        }
        
        log.trace("Image: {}", imgUrl);
        return new MetaTag(MetaTag.Tag.OG_IMAGE, imgUrl);
    }
    
    private static MetaTag buildContentType(ValueMap valueMap) {
        String template = valueMap.get(NameConstants.PN_TEMPLATE, String.class);
        if (template != null) {
            int idx = template.indexOf("templates/");
            if (idx > 0) {
                template = template.substring(idx);
            };
        }
        
        log.trace("Content type: {}", template);
        return new MetaTag(MetaTag.Tag.CONTENT_TYPE, template);
    }
    
    private static MetaTag buildTags(Tag[] tags) {
        if (tags == null || tags.length == 0) return new MetaTag();
        
        MetaTag metaTag = new MetaTag(MetaTag.Tag.TAGS, (String) null);
        for (Tag t : tags) {
            log.trace("Tag: {}", t.getTitle());
            metaTag.addContent(t.getTitle());
        }
        return metaTag;
    }
    
    private static MetaTag buildPageID(ValueMap valueMap) {
        String pageId = valueMap.get(ANALYTICS_PAGE_ID, String.class);
        
        log.trace("Page ID: {}", pageId);
        return new MetaTag(MetaTag.Tag.PAGE_ID, pageId);
    }
    
    private static MetaTag buildRobotsOptions(ValueMap valueMap) {
        String robotsValue = valueMap.get(ROBOTS_OPTIONS, String.class);
        
        if ("default".equals(robotsValue)) robotsValue = null;
        
        return new MetaTag(MetaTag.Tag.ROBOTS_OPTIONS, robotsValue);
    }

}
