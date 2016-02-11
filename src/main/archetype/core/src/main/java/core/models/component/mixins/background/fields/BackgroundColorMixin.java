package ${package}.core.models.component.mixins.background.fields;

import com.citytechinc.cq.component.annotations.DialogField;
import com.citytechinc.cq.component.annotations.Option;
import com.citytechinc.cq.component.annotations.widgets.Selection;
import ${package}.core.models.component.mixins.ComponentMixin;

public interface BackgroundColorMixin extends ComponentMixin {
    
    public static final String FIELD_BACKGROUND_COLOR = "backgroundColor";
    
    public static interface DialogFields {
        
        public static final String WHITE = "white-bg";
        public static final String GREY_LIGHT_0 = "lightest-grey-bg";
        public static final String GREY_LIGHT_1 = "light-grey-bg";
        
        @DialogField(fieldLabel = "Color", name = "./"+FIELD_BACKGROUND_COLOR, defaultValue = WHITE)
        @Selection(type="select", options = { 
                @Option(text = "White", value = WHITE),
                @Option(text = "Light Grey - Alabaster", value = GREY_LIGHT_0),
                @Option(text = "Light Grey - Concrete", value = GREY_LIGHT_1),
        })
        public void getBackgroundColor();
        
    }
    
    public default String getBackgroundColor() {
        return getWCMUse().getProperties().get(FIELD_BACKGROUND_COLOR, String.class);
    }

}
