package ${package}.core.models.component.mixins.background;

import ${package}.core.models.component.mixins.background.fields.BackgroundColorMixin;
import ${package}.core.models.component.mixins.background.fields.BackgroundTextMixin;

public interface BackgroundMixin extends BackgroundColorMixin, BackgroundTextMixin {
    
    public static interface DialogFields extends BackgroundColorMixin.DialogFields, BackgroundTextMixin.DialogFields {
        
    }

}
