package ${package}.core.models.component.mixins;

import com.adobe.cq.sightly.WCMUse;

/**
 * This is parent type of all mixins. It provides the {@link WCMUse} object necessary
 * for rendering most any component.  
 * 
 * @author joelepps
 *
 */
public interface ComponentMixin {
    
    /**
     * Supplies mixins with the component/system state necessary for component rendering.
     * 
     * @return
     */
    public WCMUse getWCMUse();


}
