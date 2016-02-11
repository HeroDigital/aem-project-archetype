package ${package}.core.models.data;

import org.apache.sling.api.SlingHttpServletRequest;

/**
 * Interface for GenericMultiField xtype models.
 * <p>
 * Only requirement is that implementations must have a zero-argument constructor and
 * getters and setters for all fields.
 * <p>
 * Primitives must be declared with their Object counterpart (Boolean not boolean).
 * 
 * @author joelepps
 *
 */
public interface GenericMultiField {
    
    /**
     * Code which creates new instances of this object should call this method once all fields have been set.
     * 
     * @param request
     */
    public void init(SlingHttpServletRequest request);

}

