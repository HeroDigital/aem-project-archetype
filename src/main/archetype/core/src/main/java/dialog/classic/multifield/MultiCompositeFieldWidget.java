/**
 * Copyright 2013, CITYTECH, Inc.
 * All rights reserved - Do Not Redistribute
 * Confidential and Proprietary
 */
package ${package}.dialog.classic.multifield;

import com.citytechinc.cq.component.annotations.config.Widget;
import com.citytechinc.cq.component.dialog.AbstractWidget;

@Widget(annotationClass = MultiCompositeField.class, makerClass = MultiCompositeFieldWidgetMaker.class, xtype = MultiCompositeFieldWidget.XTYPE)
public final class MultiCompositeFieldWidget extends AbstractWidget {

    public static final String XTYPE = "mtmulticompositefield";
    
    private int maxLimit;
    
    public MultiCompositeFieldWidget(MultiCompositeFieldWidgetParameters parameters) {
        super(parameters);
        this.maxLimit = parameters.getMaxLimit();
    }
    
    public String getBaseName() {
        return "item";
    }
    
    public boolean isMatchBaseName() {
        return false;
    }

    public int getMaxLimit() {
        return maxLimit;
    }

    public void setMaxLimit(int maxLimit) {
        this.maxLimit = maxLimit;
    }

}
