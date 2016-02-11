package ${package}.core.models;

import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.sling.api.scripting.SlingScriptHelper;

import com.adobe.cq.sightly.WCMUse;
import ${package}.core.models.data.MetaTag;
import ${package}.core.services.MetaTagServiceWrapper;

/**
 * Provides Sightly access to the collection of {@link MetaTag} instances for this page.
 * 
 * @author joelepps
 *
 */
public class MetaTagModel extends WCMUse {
    
    private static final MetaTag NULL = new MetaTag();
    
    private Map<MetaTag.Tag, MetaTag> metaTags;
    
    @Override
    public void activate() throws Exception {
        SlingScriptHelper helper = getSlingScriptHelper();
        MetaTagServiceWrapper metaTagService = helper.getService(MetaTagServiceWrapper.class);
        metaTags = metaTagService.buildMetaTags(getRequest(), getResource());
    }
    
    public String getTitle() {
        return metaTags.getOrDefault(MetaTag.Tag.TITLE, NULL).getContent();
    }
    
    public String getCanonicalUrl() {
        return metaTags.getOrDefault(MetaTag.Tag.CANONICAL_URL, NULL).getContent();
    }
    
    public Collection<MetaTag> getMetaTags() {
        return metaTags.values().stream()
                .filter(x -> x.getTag().getChannels().contains(MetaTag.Channel.HTML))
                .collect(Collectors.toList());
    }
    
    public String getLocale() {
        if (getWcmMode().isEdit()) return "en-US";
        return metaTags.getOrDefault(MetaTag.Tag.LOCALE, NULL).getContent();
    }

}
