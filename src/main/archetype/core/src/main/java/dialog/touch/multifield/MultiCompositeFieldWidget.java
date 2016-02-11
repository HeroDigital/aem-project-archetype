/**
 *    Copyright 2013 CITYTECH, Inc.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package ${package}.dialog.touch.multifield;

import java.util.HashMap;
import java.util.Map;

import com.citytechinc.cq.component.annotations.config.TouchUIWidget;
import com.citytechinc.cq.component.touchuidialog.widget.AbstractTouchUIWidget;
import com.citytechinc.cq.component.touchuidialog.widget.DefaultTouchUIWidgetParameters;
import ${package}.dialog.classic.multifield.MultiCompositeField;

@TouchUIWidget(annotationClass = MultiCompositeField.class, makerClass = MultiCompositeFieldWidgetMaker.class, resourceType = MultiCompositeFieldWidget.RESOURCE_TYPE, ranking = MultiCompositeFieldWidget.RANKING)
public class MultiCompositeFieldWidget extends AbstractTouchUIWidget {

    public static final String RESOURCE_TYPE = "granite/ui/components/foundation/form/multifield";
    public static final int RANKING = 1000000;
    /** This property marks standard multfield widgets as custom and is read by the custom widget JS. It must be placed on the multifield and fieldset elements */
    public static final String MULTIFIELD_EXTENSION_FLAG = "eaem-nested";

    public MultiCompositeFieldWidget(DefaultTouchUIWidgetParameters parameters) {
        super(parameters);
    }

    @Override
    public Map<String, ?> getAdditionalProperties() {
        @SuppressWarnings("unchecked")
        Map<String, Object> additionalProps = (Map<String, Object>) super.getAdditionalProperties();
        if (additionalProps == null) additionalProps = new HashMap<String, Object>();
        
        additionalProps.put(MULTIFIELD_EXTENSION_FLAG, "");
        return additionalProps;
    }

}
