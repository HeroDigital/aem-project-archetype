package ${package}.core.models.component.traits;

import com.adobe.cq.sightly.WCMUsePojo;

/**
 * This is parent type of all traits. It provides the {@link WCMUsePojo} object necessary
 * for rendering most any component.
 *
 * @author joelepps
 *
 */
public interface ComponentTrait {

    /**
     * Supplies traits with the component/system state necessary for component rendering.
     *
     * @return WCMUsePojo bean (instance of 'this' object)
     */
    public WCMUsePojo getWCMUse();


}
