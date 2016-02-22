package ${package}.core.models.component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import com.adobe.cq.sightly.WCMUsePojo;
import ${package}.core.models.component.mixins.ComponentMixin;

/**
 * Helper super type providing default implementations for {@link ComponentMixin} classes.
 * 
 * @author joelepps
 *
 */
public abstract class ComponentModel extends WCMUsePojo implements ComponentMixin {
    
    public static final String COMPONENT_GROUP_CONTENT = "${artifactName} Content";
    public static final String COMPONENT_GROUP_MISC = "${artifactName} Misc";
    
    private Map<String, String> debugModel;
    private Set<Class<?>> debugTypes;
    
    @Override
    public void activate() throws Exception {
    }
    
    @Override
    public WCMUsePojo getWCMUse() {
        return this;
    }
    
    /*
     * START DEBUGGING HELPER CODE
     * Helpful during component development. Should never be invoked by production code.
     */
    
    /**
     * Refer to the following for instructions on use:
     * <p>
     * {@code servicenow-www-view/src/main/content/jcr_root/apps/servicenow-www/components/_debugging/_debugging.html}
     */
    public Map<String, String> getDebugModel() throws Exception {
        initDebug();
        return debugModel;
    }
    
    /**
     * Refer to the following for instructions on use:
     * <p>
     * {@code servicenow-www-view/src/main/content/jcr_root/apps/servicenow-www/components/_debugging/_debugging.html}
     */
    public List<String> getDebugModelKeys() throws Exception {
        List<String> keys = new ArrayList<String>(getDebugModel().keySet());
        Collections.sort(keys);
        return keys;
    }
    
    /**
     * Refer to the following for instructions on use:
     * <p>
     * {@code servicenow-www-view/src/main/content/jcr_root/apps/servicenow-www/components/_debugging/_debugging.html}
     */
    public List<String> getDebugTypes() throws Exception {
        initDebug();
        return debugTypes.stream().map(x -> x.toString()).sorted().collect(Collectors.toList());
    }
    
    private void initDebug() throws Exception {
        if (debugModel != null && debugTypes != null) return;
        
        Map<String, String> model = new HashMap<String, String>();
        Set<Class<?>> types = new HashSet<Class<?>>();
        
        ComponentModelDebugHelper.appendToDebugModel("model", getClass(), this, model, types);
        
        this.debugModel = model;
        this.debugTypes = types;
    }
    
}

