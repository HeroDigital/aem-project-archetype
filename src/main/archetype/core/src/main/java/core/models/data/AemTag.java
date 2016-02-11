package ${package}.core.models.data;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.tagging.Tag;
import com.day.cq.tagging.TagManager;
import ${package}.core.util.ServiceUtils;

/**
 * Simple DTO representing an AEM tag and, optionally, its children.
 * <p>
 * Designed for JSON serialization.
 *  
 * @author joelepps
 *
 */
public class AemTag {
    
    private static final Logger log = LoggerFactory.getLogger(AemTag.class);
    
    private final String id;
    private final String title;
    private final List<AemTag> children;
    
    private AemTag(String id, String title) {
        this(id, title, null);
    }
    
    private AemTag(String id, String title, List<AemTag> children) {
        this.id = id;
        this.title = title;
        this.children = children;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<AemTag> getChildren() {
        if (children == null) return new ArrayList<>();
        return children;
    }
    
    /*
     * STATIC HELPER METHODS
     */
    
    /**
     * 
     * @param tagId Tag ID
     * @param resolver Resource Resolver
     * @param locale Locale to use for title
     * @param withChildren Include immediate children tags
     * @return Built AemTag or null
     */
    public static AemTag createAemTag(String tagId, ResourceResolver resolver, Locale locale, boolean withChildren) {
        TagManager tagManager = resolver.adaptTo(TagManager.class);
        if (tagManager == null) {
            log.warn("Tag manager could not be resolved when working on {}", tagId);
            return null;
        }
        Tag tag = tagManager.resolve(tagId);
        if (tag == null) {
            log.warn("Tag {} could not be resolved", tagId);
            return null;
        }
        return createAemTag(tag, resolver, locale, withChildren);
    }
    
    /**
     * 
     * @param tag Tag
     * @param resolver Resource Resolver
     * @param locale Locale to use for title
     * @param withChildren Include immediate children
     * @return Built AemTag or null
     */
    public static AemTag createAemTag(Tag tag, ResourceResolver resolver, Locale locale, boolean withChildren) {
        if (tag == null) return null;
        
        Resource tagResource = resolver.resolve(tag.getPath());
        if (tagResource == null) {
            log.warn("Tag {} could not be resolved to resource", tag);
            return null;
        }
        
        String tagTitle = ServiceUtils.coalesce(tag.getLocalizedTitle(locale), tag.getTitle());

        if (withChildren) {
            List<AemTag> children = StreamSupport.stream(tagResource.getChildren().spliterator(), false)
                 .map(resource -> {
                    Tag childTag = resource.adaptTo(Tag.class);
                    if (childTag == null) return null;
                    String title = ServiceUtils.coalesce(childTag.getLocalizedTitle(locale), childTag.getTitle());
                    return new AemTag(childTag.getTagID(), title);
                })
                .filter(Objects::nonNull)
                .collect(Collectors.toList());
            
            return new AemTag(tag.getTagID(), tagTitle, children);
        } else {
            return new AemTag(tag.getTagID(), tagTitle);
        }
    }

}
