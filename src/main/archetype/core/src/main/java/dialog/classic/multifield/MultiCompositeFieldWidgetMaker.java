/**
 * Copyright 2013, CITYTECH, Inc.
 * All rights reserved - Do Not Redistribute
 * Confidential and Proprietary
 */
package ${package}.dialog.classic.multifield;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.citytechinc.cq.component.annotations.DialogField;
import com.citytechinc.cq.component.annotations.IgnoreDialogField;
import com.citytechinc.cq.component.dialog.AbstractWidget;
import com.citytechinc.cq.component.dialog.DialogElement;
import com.citytechinc.cq.component.dialog.DialogFieldConfig;
import com.citytechinc.cq.component.dialog.exception.InvalidComponentClassException;
import com.citytechinc.cq.component.dialog.exception.InvalidComponentFieldException;
import com.citytechinc.cq.component.dialog.factory.WidgetFactory;
import com.citytechinc.cq.component.dialog.maker.AbstractWidgetMaker;
import com.citytechinc.cq.component.dialog.maker.WidgetMakerParameters;
import com.citytechinc.cq.component.dialog.util.DialogUtil;
import com.citytechinc.cq.component.dialog.widgetcollection.WidgetCollection;
import com.citytechinc.cq.component.dialog.widgetcollection.WidgetCollectionParameters;
import com.citytechinc.cq.component.maven.util.ComponentMojoUtil;

import javassist.CtMember;
import javassist.CtMethod;

public final class MultiCompositeFieldWidgetMaker extends AbstractWidgetMaker<MultiCompositeFieldWidgetParameters> {

    private static final String FIELD_CONFIGS = "fieldConfigs";

    public MultiCompositeFieldWidgetMaker(WidgetMakerParameters parameters) {
        super(parameters);
    }

    @Override
    public DialogElement make(MultiCompositeFieldWidgetParameters widgetParameters) throws IllegalArgumentException {
        try {
            MultiCompositeField multiCompositeFieldAnnotation = getAnnotation(MultiCompositeField.class);
    
            // set multi composite field specific fields
            widgetParameters.setContainedElements(buildWidgetCollection(multiCompositeFieldAnnotation));
            widgetParameters.setMaxLimit(multiCompositeFieldAnnotation.maxLimit());

            return new MultiCompositeFieldWidget(widgetParameters);
        } catch (Exception e) {
            throw new IllegalArgumentException(e);
        }
    }

    private List<DialogElement> buildWidgetCollection(MultiCompositeField multiCompositeFieldAnnotation) throws Exception {

        List<CtMember> fieldsAndMethods = new ArrayList<CtMember>();

        fieldsAndMethods.addAll(ComponentMojoUtil.collectFields(getCtType()));
        fieldsAndMethods.addAll(ComponentMojoUtil.collectMethods(getCtType()));

        List<DialogElement> elements = new ArrayList<DialogElement>();

        for (CtMember member : fieldsAndMethods) {
            if (!member.hasAnnotation(IgnoreDialogField.class)) {
                DialogFieldConfig dialogFieldConfig = null;
                if (member instanceof CtMethod) {
                    try {
                        dialogFieldConfig = DialogUtil.getDialogFieldFromSuperClasses((CtMethod) member);
                    } catch (InvalidComponentClassException e) {
                        throw new InvalidComponentFieldException(e.getMessage(), e);
                    }
                } else {
                    if (member.hasAnnotation(DialogField.class)) {
                        dialogFieldConfig =
                            new DialogFieldConfig((DialogField) member.getAnnotation(DialogField.class), member);
                    }
                }

                if (dialogFieldConfig != null) {
                    Class<?> fieldClass = parameters.getClassLoader().loadClass(member.getDeclaringClass().getName());

                    double ranking = dialogFieldConfig.getRanking();

                    WidgetMakerParameters curFieldMember =
                        new WidgetMakerParameters(dialogFieldConfig, fieldClass, parameters.getClassLoader(),
                            parameters.getClassPool(), parameters.getWidgetRegistry(), null, true);

                    DialogElement builtFieldWidget = WidgetFactory.make(curFieldMember, -1);
                    if (builtFieldWidget != null) {
                        if (builtFieldWidget instanceof AbstractWidget) {
                            // Strip ./ from name
                            AbstractWidget widget = (AbstractWidget) builtFieldWidget;
                            String name = widget.getName();
                            if (name.startsWith("./")) {
                                widget.setName(name.substring(2));
                            }
                        }
                        builtFieldWidget.setRanking(ranking);
                        elements.add(builtFieldWidget);
                    }
                }
            }
        }
        WidgetCollectionParameters wcp = new WidgetCollectionParameters();
        wcp.setContainedElements(elements);
        wcp.setFieldName(FIELD_CONFIGS);
        return Arrays.asList(new DialogElement[] { new WidgetCollection(wcp) });

    }
}
