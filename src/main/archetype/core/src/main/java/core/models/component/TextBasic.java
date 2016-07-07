package ${package}.core.models.component;

import com.citytechinc.cq.component.annotations.Component;
import com.citytechinc.cq.component.annotations.DialogField;
import com.citytechinc.cq.component.annotations.Tab;
import com.citytechinc.cq.component.annotations.widgets.DialogFieldSet;
import com.citytechinc.cq.component.annotations.widgets.TextField;
import ${package}.dialog.touch.collapsible.Collapsible;
import ${package}.core.models.component.ComponentModel;
import ${package}.core.models.component.traits.background.fields.BackgroundColorTrait;

@Component(value = "Text Basic",
    group = ComponentModel.COMPONENT_GROUP_CONTENT,
    disableTargeting = true,
    layout = "rollover",
    dialogMode = "floating",
    dialogWidth = 800,
    tabs = { @Tab(title = "Text Basic") })
public class TextBasic extends ComponentModel implements BackgroundColorTrait {

    @DialogField(ranking = 10)
    @DialogFieldSet(title = "Background Field Set")
    @Collapsible(title = "Background Collapsible")
    private final BackgroundColorTrait.DialogFields backgroundFields = null;

    @DialogField(fieldLabel = "Text", name = "./text", ranking=1)
    @TextField
    public String getText() {
        return getProperties().get("text", String.class);
    }

}
