#set( $symbol_dollar = '$' )

(function () {
    var DATA_EAEM_NESTED = "data-eaem-nested";
    var CFFW = ".foundation-field-edit";

    function setSelect(${symbol_dollar}field, value){
        var select = ${symbol_dollar}field.closest(".coral-Select").data("select");

        if(select){
            select.setValue(value);
        }
    }

    function setCheckBox(${symbol_dollar}field, value){
        ${symbol_dollar}field.prop( "checked", ${symbol_dollar}field.attr("value") == value);
    }

    //reads multifield data from server, creates the nested composite multifields and fills them
    function addDataInFields() {
        function getMultiFieldNames(${symbol_dollar}multifields){
            var mNames = {}, mName;

            ${symbol_dollar}multifields.each(function (i, multifield) {
                mName = ${symbol_dollar}(multifield).children("[name${symbol_dollar}='@Delete']").attr("name");

                mName = mName.substring(0, mName.indexOf("@"));

                mName = mName.substring(2);

                mNames[mName] = ${symbol_dollar}(multifield);
            });

            return mNames;
        }

        function buildMultiField(data, ${symbol_dollar}multifield, mName){
            if(_.isEmpty(mName) || _.isEmpty(data)){
                return;
            }

            _.each(data, function(value, key){
                if(key == "jcr:primaryType"){
                    return;
                }

                ${symbol_dollar}multifield.find(".js-coral-Multifield-add").click();

                _.each(value, function(fValue, fKey){
                    if(fKey == "jcr:primaryType"){
                        return;
                    }

                    var ${symbol_dollar}field = ${symbol_dollar}multifield.find("[name='./" + fKey + "']").last(),
                        type = ${symbol_dollar}field.prop("type");

                    if(_.isEmpty(${symbol_dollar}field)){
                        return;
                    }

                    //handle single selection dropdown
                    if( type == "select-one"){
                        setSelect(${symbol_dollar}field, fValue);
                    }else if( type == "checkbox"){
                        setCheckBox(${symbol_dollar}field, fValue);
                    }else{
                        ${symbol_dollar}field.val(fValue);
                    }
                });
            });
        }

        ${symbol_dollar}(document).on("dialog-ready", function() {
            var ${symbol_dollar}multifields = ${symbol_dollar}("[" + DATA_EAEM_NESTED + "]");

            if(_.isEmpty(${symbol_dollar}multifields)){
                return;
            }

            var mNames = getMultiFieldNames(${symbol_dollar}multifields),
                ${symbol_dollar}form = ${symbol_dollar}(".cq-dialog"),
                actionUrl = ${symbol_dollar}form.attr("action") + ".infinity.json";

            ${symbol_dollar}.ajax(actionUrl).done(postProcess);

            function postProcess(data){
                _.each(mNames, function(${symbol_dollar}multifield, mName){
                    buildMultiField(data[mName], ${symbol_dollar}multifield, mName);
                });
            }
        });
    }

    //collect data from widgets in multifield and POST them to CRX
    function collectDataFromFields(){
        function fillValue(${symbol_dollar}form, fieldSetName, ${symbol_dollar}field, counter){
            var name = ${symbol_dollar}field.attr("name");

            if (!name) {
                return;
            }

            //strip ./
            if (name.indexOf("./") == 0) {
                name = name.substring(2);
            }

            var value = ${symbol_dollar}field.val();

            if( ${symbol_dollar}field.prop("type") == "checkbox" ){
                value = ${symbol_dollar}field.prop("checked") ? ${symbol_dollar}field.val() : "";
            }

            ${symbol_dollar}('<input />').attr('type', 'hidden')
                .attr('name', fieldSetName + "/" + counter + "/" + name)
                .attr('value', value )
                .appendTo(${symbol_dollar}form);

            //remove the field, so that individual values are not POSTed
            ${symbol_dollar}field.remove();
        }

        ${symbol_dollar}(document).on("click", ".cq-dialog-submit", function () {
            var ${symbol_dollar}multifields = ${symbol_dollar}("[" + DATA_EAEM_NESTED + "]");

            if(_.isEmpty(${symbol_dollar}multifields)){
                return;
            }

            var ${symbol_dollar}form = ${symbol_dollar}(this).closest("form.foundation-form"),
                ${symbol_dollar}fieldSets, ${symbol_dollar}fields;

            ${symbol_dollar}multifields.each(function(i, multifield){
                ${symbol_dollar}fieldSets = ${symbol_dollar}(multifield).find("[class='coral-Form-fieldset']");

                ${symbol_dollar}fieldSets.each(function (counter, fieldSet) {
                    ${symbol_dollar}fields = ${symbol_dollar}(fieldSet).children().children(CFFW);

                    ${symbol_dollar}fields.each(function (j, field) {
                        fillValue(${symbol_dollar}form, ${symbol_dollar}(fieldSet).data("name"), ${symbol_dollar}(field).find("[name]"), (counter + 1));
                    });
                });
            });
        });
    }

    ${symbol_dollar}(document).ready(function () {
        addDataInFields();
        collectDataFromFields();
    });
})();
