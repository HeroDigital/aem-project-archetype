package ${package}.core.services.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.apache.felix.scr.annotations.Component;
import org.apache.felix.scr.annotations.Properties;
import org.apache.felix.scr.annotations.Property;
import org.apache.felix.scr.annotations.Reference;
import org.apache.felix.scr.annotations.ReferenceCardinality;
import org.apache.felix.scr.annotations.ReferencePolicy;
import org.apache.felix.scr.annotations.Service;
import org.apache.sling.api.resource.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ${package}.core.models.data.MetaTag;
import ${package}.core.services.MetaTagService;
import ${package}.core.services.MetaTagService.MetaTagServiceException;
import ${package}.core.util.ServiceUtils;
import ${package}.core.services.MetaTagServiceWrapper;

/**
 * Gathers up all {@link MetaTagService} implementations and builds the master set of {@link MetaTag} objects for a {@link Resource}.
 * 
 * @author joelepps
 *
 */
@Component(immediate = true, metatype = false, label="Pure Storage Meta Tag Service", description="Meta tag service for building meta data from resource")
@Service(MetaTagServiceWrapper.class)
@Properties({
        @Property(name = "service.vendor", value = "Hero Digital"),
        @Property(name = "service.description", value = "Meta tag service for building meta data from resource")
})
public class MetaTagServiceWrapperImpl implements MetaTagServiceWrapper {
    
    private static final Logger log = LoggerFactory.getLogger(MetaTagServiceWrapperImpl.class);
    
    public static final String META_TAG_REQUEST_ATTRIBUTE = "hero.metatags";
    
    @Reference(cardinality=ReferenceCardinality.OPTIONAL_MULTIPLE, bind="bind", unbind="unbind", referenceInterface=MetaTagService.class, policy=ReferencePolicy.DYNAMIC)
    private List<MetaTagService<Object>> metaTagServices;
    
    private ReadWriteLock lock = new ReentrantReadWriteLock();
    
    @Override
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(HttpServletRequest request, Resource resource) throws MetaTagServiceException {
        lock.readLock().lock();
        try {
            return buildMetaTags(request, resource, Locale.getDefault());
        } finally {
            lock.readLock().unlock();
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public Map<MetaTag.Tag, MetaTag> buildMetaTags(HttpServletRequest request, Resource resource, Locale requestLocale) throws MetaTagServiceException {
        lock.readLock().lock();
        
        try {
            
            if (resource == null || resource.getPath() == null) {
                throw new MetaTagServiceException("resource cannot be null");
            }
            
            String jcrContentPath = ServiceUtils.getJcrContentPath(resource.getPath());
            Resource jcrContent = resource.getResourceResolver().getResource(jcrContentPath);
            
            if (jcrContent == null) {
                throw new MetaTagServiceException("resource cannot be resolved: " + jcrContentPath);
            }
            
            // Check request attribute
            Map<MetaTag.Tag, MetaTag> tags = (Map<MetaTag.Tag, MetaTag>) request.getAttribute(META_TAG_REQUEST_ATTRIBUTE);
            if (tags != null) {
                log.trace("Using cached meta tags for {}", jcrContent.getPath());
                return tags;
            } else {
                tags = new HashMap<>();
            }
            
            try {
                for (MetaTagService<Object> service : metaTagServices) {
                    Optional<Object> object = service.adaptToType(jcrContent);
                    if (object.isPresent()) {
                        try {
                            addAll(tags, service.buildMetaTags(object.get(), jcrContent, requestLocale));
                        } catch (MetaTagServiceException e) {
                            log.error("Failed to build meta tags for " + jcrContent.getPath() + " with " + service.getClass().getName(), e);
                        }
                    }
                }
            } catch (Exception e) {
                throw new MetaTagServiceException("Failed to build meta tags for " + jcrContent.getPath(), e);
            }
            
            // Update request attribute
            log.trace("Caching {} meta tags for {}", tags.size(), jcrContent.getPath());
            request.setAttribute(META_TAG_REQUEST_ATTRIBUTE, tags);
            
            return tags;
            
        } finally {
            lock.readLock().unlock();
        }
        
    }
    
    protected void addAll(Map<MetaTag.Tag, MetaTag> baseMap, Map<MetaTag.Tag, MetaTag> newMap) {
        for (Entry<MetaTag.Tag, MetaTag> entry : newMap.entrySet()) {
            MetaTag.Tag key = entry.getKey();
            MetaTag tag = entry.getValue();
            
            if (baseMap.containsKey(key)) {
                log.debug("Overriding {}. Old value {}. New value {}", key, baseMap.get(key), tag);
            }
            if (tag.isEmpty()) {
                log.debug("Skipping emtpy tag {}", tag);
                continue;
            }
            baseMap.put(key, tag);
        }
    }
    
    /**
     * OSGI bind method
     * 
     * @param service
     */
    protected void bindMetaTagServices(MetaTagService<Object> service) {
        lock.writeLock().lock();
        try {
            if (metaTagServices == null) {
                metaTagServices = new ArrayList<>();
            }
            metaTagServices.add(service);
            metaTagServices.sort(Comparator.comparingInt(MetaTagService::getPriority));
        } finally {
            lock.writeLock().unlock();
        }
    }
    
    /**
     * OSGI unbind method
     * 
     * @param service
     */
    protected void unbindMetaTagServices(MetaTagService<Object> service) {
        lock.writeLock().lock();
        try {
            metaTagServices.remove(service);
            metaTagServices.sort(Comparator.comparingInt(MetaTagService::getPriority));
        } finally {
            lock.writeLock().unlock();
        }
    }

}
