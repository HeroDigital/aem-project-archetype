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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.citytechinc.cq.component.touchuidialog.TouchUIDialogElement;
import com.citytechinc.cq.component.touchuidialog.widget.DefaultTouchUIWidgetParameters;
import com.citytechinc.cq.component.touchuidialog.widget.dialogfieldset.DialogFieldSetWidget;
import com.citytechinc.cq.component.touchuidialog.widget.dialogfieldset.DialogFieldSetWidgetParameters;
import com.citytechinc.cq.component.xml.XmlElement;

public class MultiCompositeFieldWidgetParameters extends DefaultTouchUIWidgetParameters {
    
    protected List<TouchUIDialogElement> items;
    
    public void addItem(TouchUIDialogElement item) {
        if (items == null) {
            items = new ArrayList<TouchUIDialogElement>();
        }
        items.add(item);
    }

    public List<TouchUIDialogElement> getItems() {
        return items;
    }

    public void setItems(List<TouchUIDialogElement> items) {
        this.items = items;
    }

    private DialogFieldSetWidget getDialogFieldSet() {
        // This property is required by the custom touch ui multifield extension JS
        Map<String, String> eaemNested = new HashMap<>();
        eaemNested.put(MultiCompositeFieldWidget.MULTIFIELD_EXTENSION_FLAG, "");
        
        DialogFieldSetWidgetParameters fieldSetParms = new DialogFieldSetWidgetParameters();
        fieldSetParms.setName(getName());
        fieldSetParms.setAdditionalProperties(eaemNested);
        fieldSetParms.setItems(getItems());
        fieldSetParms.setFieldName("field");
        
        DialogFieldSetWidget widget = new DialogFieldSetWidget(fieldSetParms);
        
        return widget;
    }

    @Override
    public List<? extends XmlElement> getContainedElements() {
        List<XmlElement> allContainedElements = new ArrayList<XmlElement>();

        DialogFieldSetWidget fieldSet = getDialogFieldSet();

        if (fieldSet != null) {
            allContainedElements.add(fieldSet);
        }

        if (containedElements != null) {
            allContainedElements.addAll(containedElements);
        }

        return allContainedElements;
    }
    
    @Override
    public String getResourceType() {
        return MultiCompositeFieldWidget.RESOURCE_TYPE;
    }

    @Override
    public void setResourceType(String resourceType) {
        throw new UnsupportedOperationException("resourceType is Static for MultiFieldWidget");
    }
}
