package ${package}.core.services.impl;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.wcm.api.NameConstants;
import ${package}.core.models.data.MetaTag;
import ${package}.core.services.MetaTagService;

/**
 * Builds meta tags for anything under /content.
 * <p>
 * Automatically included as part of {@link MetaTagServiceWrapperImpl}
 * 
 * @author joelepps
 *
 */
@Component(immediate = true, metatype = false, label="Generic Meta Tag Service", description="Generic meta tag service")
@Service(MetaTagService.class)
@Properties({
        @Property(name = "service.vendor", value = "Hero Digital"),
        @Property(name = "service.description", value = "Generic meta tag service")
})
public class MetaTagServiceGeneric implements MetaTagService<Resource> {
    
    private static final Logger log = LoggerFactory.getLogger(MetaTagServiceGeneric.class);
    
    @Override
    public Optional<Resource> adaptToType(Resource jcrContent) {
        if (isSupportedBasic(jcrContent)) {
            log.debug("Supported: {}", jcrContent.getPath());
            return Optional.of(jcrContent);
        }
        log.debug("Not Supported: {}", jcrContent);
        return Optional.empty();
    }
    
    @Override
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(Resource jcrContent, Resource jcrContentDuplicate, Locale locale) throws MetaTagServiceException {
        
        log.debug("Building meta tags for {}", jcrContent);
        
        ValueMap valueMap = jcrContent.getValueMap();
        
        Map<MetaTag.Tag, MetaTag> tags = new HashMap<>();
        
        addMetaTag(tags, buildTitle(jcrContent, valueMap));
        addMetaTag(tags, buildDescription(valueMap));

        return tags;
    }
    
    @Override
    public int getPriority() {
        return 0;
    }
    
    /*
     * +++++++++++++++++++++++
     * TAG HELPER METHODS
     * +++++++++++++++++++++++
     */
    
    private static MetaTag buildTitle(Resource jcrContent, ValueMap valueMap) {
        String title = valueMap.get(NameConstants.PN_TITLE, String.class);
        if (StringUtils.isBlank(title)) {
            Resource parent = jcrContent.getParent();
            if (parent != null) {
                title = parent.getName();
            }
        }
        
        log.trace("Title: {}", title);
        return new MetaTag(MetaTag.Tag.TITLE, title);
    }
    
    private static MetaTag buildDescription(ValueMap valueMap) {
        String description = valueMap.get(NameConstants.PN_DESCRIPTION, String.class);
        
        log.trace("Description: {}", description);
        return new MetaTag(MetaTag.Tag.DESCRIPTION, description);
    }    
    
    /*
     * +++++++++++++++++++++++
     * STATIC HELPER METHODS
     * +++++++++++++++++++++++
     */
    
    public static boolean isSupportedBasic(Resource jcrContent) {
        if (jcrContent == null) {
            log.trace("Not supported: resource is null");
            return false;
        }
        
        String path = jcrContent.getPath();
        if (!path.startsWith("/content")) {
            log.trace("Not supported: path not from content [{}]", path);
            return false;
        }
        
        return true;
    }
    
    public static boolean isSupportedTemplate(ValueMap valueMap, String... templates) {
        if (templates == null || templates.length == 0) return false;
        
        String template = valueMap.get(NameConstants.PN_TEMPLATE, String.class);
        for (String expectedTemplate : templates) {
            if (expectedTemplate == null) continue;
            if (expectedTemplate.equals(template)) return true;
        }
        
        return false;
    }
    
    public static void addMetaTag(Map<MetaTag.Tag, MetaTag> map, MetaTag... metaTags) {
        if (metaTags == null) return;
        
        for (MetaTag metaTag : metaTags) {
            if (metaTag == null || metaTag.isEmpty()) return;
            map.put(metaTag.getTag(), metaTag);
        }
    }
    
}
