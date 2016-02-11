/**
 * Copyright 2013, CITYTECH, Inc.
 * All rights reserved - Do Not Redistribute
 * Confidential and Proprietary
 */
package ${package}.dialog.classic.multifield;

import com.citytechinc.cq.component.dialog.widget.DefaultWidgetParameters;
import com.citytechinc.cq.component.util.Constants;

public class MultiCompositeFieldWidgetParameters extends DefaultWidgetParameters {
    
    private int maxLimit;
    
    @Override
    public String getPrimaryType() {
        return Constants.CQ_WIDGET;
    }

    @Override
    public void setPrimaryType(String primaryType) {
        throw new UnsupportedOperationException("PrimaryType is Static for DialogFieldSetWidget");
    }

    @Override
    public String getXtype() {
        return MultiCompositeFieldWidget.XTYPE;
    }

    @Override
    public void setXtype(String xtype) {
        throw new UnsupportedOperationException("xtype is Static for DialogFieldSetWidget");
    }

    public int getMaxLimit() {
        return maxLimit;
    }

    public void setMaxLimit(int maxLimit) {
        this.maxLimit = maxLimit;
    }
}
