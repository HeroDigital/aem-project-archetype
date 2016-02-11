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
package ${package}.dialog.touch.collapsible;

import com.citytechinc.cq.component.touchuidialog.container.ContainerParameters;
import com.citytechinc.cq.component.touchuidialog.widget.TouchUIWidgetParameters;

public class CollapsibleContainerFieldWidgetParameters extends ContainerParameters implements TouchUIWidgetParameters {
    
    private String title;
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String getFieldLabel() {
        return null;
    }

    @Override
    public void setFieldLabel(String fieldLabel) {
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public void setName(String name) {
    }

    @Override
    public String getFieldDescription() {
        return null;
    }

    @Override
    public void setFieldDescription(String fieldDescription) {
    }

    @Override
    public boolean isRequired() {
        return false;
    }

    @Override
    public void setRequired(boolean required) {
    }

    @Override
    public String getValue() {
        return null;
    }

    @Override
    public void setValue(String value) {
    }

    @Override
    public String getDefaultValue() {
        return null;
    }

    @Override
    public void setDefaultValue(String defaultValue) {
    }

    @Override
    public boolean isDisabled() {
        return false;
    }

    @Override
    public void setDisabled(boolean disabled) {
    }

    @Override
    public String getCssClass() {
        return null;
    }

    @Override
    public void setCssClass(String cssClass) {
    }

    @Override
    public boolean isRenderReadOnly() {
        return false;
    }

    @Override
    public void setRenderReadOnly(boolean renderReadOnly) {
    }

    @Override
    public boolean isShowOnCreate() {
        return false;
    }

    @Override
    public void setShowOnCreate(boolean showOnCreate) {
    }
}
