package ${package}.core.services;

import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.sling.api.resource.Resource;

import ${package}.core.models.data.MetaTag;
import ${package}.core.services.MetaTagService.MetaTagServiceException;

/**
 * Wraps all {@link MetaTagService} implementations. Use this to get all applicable {@link MetaTag}
 * objects for a {@link Resource}.
 * <p>
 * Also provides request attribute based caching.
 * 
 * @author joelepps
 *
 */
public interface MetaTagServiceWrapper {
    
    /**
     * Build meta tags for resource.
     * <p>
     * Convenience method, will invoke {@link #buildMetaTags(Resource, Locale)} with {@link Locale#getDefault()}.
     * 
     * @param request request attribute is used to cache result
     * @param resource any resource node that is at or under the page
     * @return Map where key is metaTag.getName() and value is the metatag.
     * @throws MetaTagServiceException if not supported or error occurs
     */
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(HttpServletRequest request, Resource resource) throws MetaTagServiceException;
    
    /**
     * Build meta tags for resource.
     * 
     * @param request request attribute is used to cache result
     * @param resource any resource node that is at or under the page
     * @param requestLocale the locale of the request, used primarily when {@code jcrContent} has no language assigned
     * @return Map where key is metaTag.getName() and value is the metatag.
     * @throws MetaTagServiceException if not supported or error occurs
     */
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(HttpServletRequest request, Resource resource, Locale requestLocale) throws MetaTagServiceException;
}
