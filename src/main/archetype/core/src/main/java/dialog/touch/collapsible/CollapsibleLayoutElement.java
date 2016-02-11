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

import com.citytechinc.cq.component.touchuidialog.layout.AbstractLayoutElement;
import com.citytechinc.cq.component.util.Constants;
import com.citytechinc.cq.component.xml.NameSpacedAttribute;

public class CollapsibleLayoutElement extends AbstractLayoutElement {

    public static final String RESOURCE_TYPE = "granite/ui/components/foundation/layouts/collapsible";
    
    private NameSpacedAttribute<String> resourceType;

    public CollapsibleLayoutElement(CollapsibleLayoutElementParameters parameters) {
        super(parameters);
        
        if (StringUtils.isNotEmpty(parameters.getResourceType())) {
            resourceType = new NameSpacedAttribute<String>(Constants.SLING_NS_URI, Constants.SLING_NS_PREFIX, "resourceType", parameters.getResourceType());
        }
    }

    public NameSpacedAttribute<String> getSlingResourceType() {
        return resourceType;
    }
    
}
