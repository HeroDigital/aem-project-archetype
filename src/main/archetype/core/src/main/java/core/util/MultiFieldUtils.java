package ${package}.core.util;

import java.beans.BeanInfo;
import java.beans.IntrospectionException;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ${package}.core.models.data.GenericMultiField;

/**
 * Helper methods for {@link GenericMultiField}. 
 * 
 * @author joelepps
 *
 */
public class MultiFieldUtils {
    
    private static final Logger log = LoggerFactory.getLogger(MultiFieldUtils.class);
    
    private static final String CACHE_KEY_PREFIX = "multifield.";
    
    /**
     * Constructs a new instance of a {@link GenericMultiField} object. Object's fields must match the JCR property name in order
     * to be populated correctly. 
     * 
     * @param resource
     * @param type
     * @return
     * @throws ReflectiveOperationException
     * @throws IntrospectionException 
     */
    @SuppressWarnings("unchecked")
    public static <T extends GenericMultiField> T buildMultiField(Resource resource, SlingHttpServletRequest request, Class<T> type) throws ReflectiveOperationException, IntrospectionException {
        log.trace("Building new {} instance", type);
        
        GenericMultiField model = type.newInstance();
        BeanInfo beanInfo = Introspector.getBeanInfo(type);
        ValueMap map = resource.getValueMap();
        
        for (PropertyDescriptor propertyDescriptor : beanInfo.getPropertyDescriptors()) {
            Method writeMethod = propertyDescriptor.getWriteMethod();
            Class<?> propertyType = propertyDescriptor.getPropertyType();
            String fieldName = propertyDescriptor.getName();
            
            if (writeMethod != null) {
                Object value = getProperty(map, fieldName, propertyType);
                if (value != null) {
                    log.trace("Setting {} to {}", fieldName, value);
                    writeMethod.invoke(model, value);
                }
            }
        }
        
        model.init(request);

        return (T) model;
    }

    private static Object getProperty(ValueMap map, String key, Class<?> type) {
        if (map.containsKey(key)) {
            return map.get(key, type);
        } else {
            return null;
        }
    }
    
    /**
     * Creates a list of {@link GenericMultiField} objects based on a parent resource node.
     *  
     * @param resource
     * @param request
     * @param type
     * @param useCache
     * @return
     * @throws ReflectiveOperationException
     * @throws IntrospectionException
     */
    @SuppressWarnings("unchecked")
    public static <T extends GenericMultiField> List<T> buildMultiFieldListFromResource(Resource resource, SlingHttpServletRequest request, Class<T> type, boolean useCache) throws ReflectiveOperationException, IntrospectionException {
        List<T> list = new ArrayList<T>();

        if (resource != null) {
            
            // CACHE CHECK
            if (useCache) {
                log.trace("Checking cache for {}", resource);
                Object obj = request.getAttribute(CACHE_KEY_PREFIX + resource.getPath());
                if (obj != null) {
                    return (List<T>) obj;
                }
            }
            
            log.trace("Trying to fetch the items from multifield node {}", resource.getName());
            Iterator<Resource> multiFieldItems = resource.listChildren();
            
            while (multiFieldItems != null && multiFieldItems.hasNext()) {
                Resource item = multiFieldItems.next();
                list.add(buildMultiField(item, request, type));
            }
            
            // CACHE STORE
            if (useCache) request.setAttribute(CACHE_KEY_PREFIX + resource.getPath(), list);
        } else {
            log.trace("Resource is null, returning empty list for null");
        }
        return list;
    }

}
