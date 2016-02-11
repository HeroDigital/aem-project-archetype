package ${package}.core.models.component;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import ${package}.core.models.component.mixins.ComponentMixin;

/**
 * Helper class containing static utility methods for component debug output.
 * <p>
 * These can be helpful during component development.
 * <p> 
 * Calls to these methods should never exist in code that is pushed to production!
 * 
 * @author joelepps
 *
 */
public class ComponentModelDebugHelper {
    
    private static final Logger log = LoggerFactory.getLogger(ComponentModelDebugHelper.class);

    /**
     * Entry point to generate Map<String, String> summary of an object. Used for debugging purposes.
     * 
     * @param prefix name prefix for variables
     * @param clazz Class to inspect
     * @param instance Instance of {@code clazz} to inspect
     * @param model Map that will be updated with fields and values
     * @param types Set that will be updated with mixin types
     * @throws Exception
     */
    public static void appendToDebugModel(String prefix, Class<?> clazz, Object instance, Map<String, String> model, Set<Class<?>> types) throws Exception {
        if (clazz == null) return;
        if (
                (!clazz.getPackage().getName().startsWith(ComponentModel.class.getPackage().getName()))
                
                || clazz.equals(ComponentModel.class)
                || clazz.equals(ComponentMixin.class)) {
            log.debug("Skipping class {}", clazz);
            return;
        }
        
        log.info("Inspecting {}", clazz);
        types.add(clazz);
        
        Method[] methods = clazz.getDeclaredMethods();
        if (methods != null) {
            for (Method m : methods) {
                handleMethod(prefix, model, types, m, instance); 
            }
        }
        
        Class<?> superClass = clazz.getSuperclass();
        
        log.info("Walking {} -> {}", clazz, superClass);
        appendToDebugModel(prefix, superClass, instance, model, types);
        
        Class<?>[] interfaces = clazz.getInterfaces();
        if (interfaces != null) {
            for (Class<?> c : interfaces) {
                log.info("Walking {} -> {}", clazz, c);
                appendToDebugModel(prefix, c, instance, model, types);
            }
        }
    }
    
    private static void handleMethod(String prefix, Map<String, String> model, Set<Class<?>> types, Method m, Object instance) throws Exception {
        if (!m.getName().startsWith("get") && !m.getName().startsWith("is")) return;
        if (m.getReturnType() == null) return;
        if (m.getParameterCount() > 0) return;
        if (Modifier.isStatic(m.getModifiers())) return;
        if (!Modifier.isPublic(m.getModifiers())) return;
            
        String name = convertMethodName(m.getName());
        Object obj = m.invoke(instance);
        
        handleObject(prefix + "." + name, obj, model, types);
    }
    
    private static void handleObject(String name, Object obj, Map<String, String> model, Set<Class<?>> types) throws Exception {
        if (obj == null) {
            model.put(name, "null");
        } else if (obj instanceof String ||
                obj instanceof Integer ||
                obj instanceof Long ||
                obj instanceof Boolean ||
                obj instanceof Double ||
                obj instanceof Byte ||
                obj instanceof Float) {
            model.put(name, obj.toString());
        } else if (obj instanceof Iterable) {
            Iterable<?> iterable = (Iterable<?>) obj;
            Iterator<?> i = iterable.iterator();
            int count = 0;
            while (i.hasNext()) {
                Object item = i.next();
                appendToDebugModel(name + "[" + (count++) + "]", item.getClass(), item, model, types);
            }
        } else if (obj instanceof Map) {
            try {
                @SuppressWarnings("unchecked")
                Map<String, String> map = (Map<String, String>) obj;
                for (String key : new ArrayList<String>(map.keySet())) {
                    model.put(name + "[" + key + "]", map.get(key));
                }
            } catch (Exception e) {
                log.error("Failed to inspect: " + obj, e);
            }
        } else {
            appendToDebugModel(name, obj.getClass(), obj, model, types);
        }
    }
    
    private static String convertMethodName(String name) {
        Pattern p = Pattern.compile("(?:get|is)(\\w)(.*)");
        Matcher m = p.matcher(name);
        if (m.find()) {
            return m.group(1).toLowerCase() + m.group(2);
        }
        return name;
    }
    
}
