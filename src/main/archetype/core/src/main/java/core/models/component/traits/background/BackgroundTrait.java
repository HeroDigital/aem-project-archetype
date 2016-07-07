package ${package}.core.models.component.traits.background;

import ${package}.core.models.component.traits.background.fields.BackgroundColorTrait;
import ${package}.core.models.component.traits.background.fields.BackgroundTextTrait;

public interface BackgroundTrait extends BackgroundColorTrait, BackgroundTextTrait {

    public static interface DialogFields extends BackgroundColorTrait.DialogFields, BackgroundTextTrait.DialogFields {

    }

}
