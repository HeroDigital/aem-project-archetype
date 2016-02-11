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

import org.codehaus.plexus.util.StringUtils;

import com.citytechinc.cq.component.annotations.config.TouchUIWidget;
import com.citytechinc.cq.component.touchuidialog.container.Container;
import com.citytechinc.cq.component.util.Constants;
import com.citytechinc.cq.component.xml.NameSpacedAttribute;

@TouchUIWidget(
    annotationClass = Collapsible.class, 
    makerClass = CollapsibleContainerFieldWidgetMaker.class, 
    resourceType = Container.RESOURCE_TYPE, 
    ranking = CollapsibleContainerFieldWidget.RANKING)
public class CollapsibleContainerFieldWidget extends Container {

    public static final int RANKING = 100;
    
    private NameSpacedAttribute<String> title;
    
    public CollapsibleContainerFieldWidget(CollapsibleContainerFieldWidgetParameters parameters) {
        super(parameters);
        
        if (StringUtils.isNotEmpty(parameters.getTitle())) {
            this.title = new NameSpacedAttribute<String>(Constants.JCR_NS_URI, Constants.JCR_NS_PREFIX, parameters.getTitle());
        }
    }
    
    public NameSpacedAttribute<String> getTitle() {
        return title;
    }

}
