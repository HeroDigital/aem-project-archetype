package ${package}.core.models.component.traits.background.fields;

import com.citytechinc.cq.component.annotations.DialogField;
import com.citytechinc.cq.component.annotations.widgets.TextField;
import ${package}.core.models.component.traits.ComponentTrait;

public interface BackgroundTextTrait extends ComponentTrait {

    public static final String FIELD_BACKGROUND_FIELD_2 = "backgroundField2";

    public static interface DialogFields {

        @DialogField(fieldLabel = "Background Field 2", name = "./"+FIELD_BACKGROUND_FIELD_2)
        @TextField
        public void getBackgroundField2();

    }

    public default String getBackgroundField2() {
        return getWCMUse().getProperties().get(FIELD_BACKGROUND_FIELD_2, String.class);
    }

}
