package ${package}.core.services;

import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.apache.sling.api.resource.Resource;

import ${package}.core.models.data.MetaTag;

/**
 * Builds meta tags for resources. Support for different content types is split
 * up into separate implementations that are picked based on {@link #adaptToType(Resource)}.
 * <p>
 * Designed so that multiple implementations of this service are all used 
 * in sequence to build the full set of tags.
 *
 * @author joelepps
 *
 */
public interface MetaTagService<T> {

    public static class MetaTagServiceException extends Exception {

        private static final long serialVersionUID = 8491248735413138653L;

        public MetaTagServiceException(String message, Throwable cause) {
            super(message, cause);
        }

        public MetaTagServiceException(String message) {
            super(message);
        }

    }
    
    /**
     * Test if this implementations supports this {@code resource}
     * 
     * @param resource
     *            the jcr:content resource of the item
     * @return Optional containing T
     */
    public Optional<T> adaptToType(Resource jcrContent);

    /**
     * Build meta tags for resource.
     * 
     * @param object the object created by {@link #adaptToType(Resource)}.
     * @param jcrContent original jcrContent resource
     * @param requestLocale the locale of the request, used primarily when {@code jcrContent} has no language assigned
     * @return Map where key is metaTag.getName() and value is the metatag.
     * @throws MetaTagServiceException if not supported or error occurs
     */
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(T object, Resource jcrContent, Locale requestLocale) throws MetaTagServiceException;
    
    /**
     * The priority of this meta tag service. If two meta tag services generate a meta tag with the same name,
     * the service with a higher priority (larger number) wins. 
     * <p>
     * Neutral priority is 0;
     * 
     * @return Integer priority
     */
    public int getPriority();

}
