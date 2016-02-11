function EditMode(){
    if (typeof CQ !== 'undefined'){
        this.isEditMode=function(){
            return (CQ.WCM)?CQ.WCM.isEditMode(true):false;
        };
        this.isPreviewMode=function(){
            return (CQ.WCM)?CQ.WCM.isPreviewMode(true):false;
        };
        this.isDesignMode=function(){
            return (CQ.WCM)?CQ.WCM.isDesignMode(true):false;
        };
        this.isDisabled=function(){
            return (!CQ.WCM);
        }
    } else {
        this.isEditMode=function(){
            return false;
        };
        this.isPreviewMode=function(){
            return false;
        };
        this.isDesignMode=function(){
            return false;
        };
        this.isDisabled=function(){
            return false;
        }
    }
};

var editmode = new EditMode();
