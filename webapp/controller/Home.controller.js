sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("cpapp.finance.controller.Home", {
        onInit() {
            this.oSplitApp = this.byId("splitApp");
            const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
            this.UserId = urlParams.get("userId");
        if(!this.UserId){
            this.UserId ='ShariefAhamed';
        }
        },
        onAfterRendering(){
            
        },

        //#region Events
        onItemPress:function(oEvent){
           let sSelected =  oEvent.getParameter("item").getText().toString().toUpperCase();
           switch(sSelected){
            case 'STOCKS':
                console.log("i")
            break;
            case 'MUTUAL FUNDS':
               this.oSplitApp.toDetail(this.byId("mutualFundsView"));
            break;
            case 'FIXED DEPOSITS':
                this.oSplitApp.toDetail(this.byId("FDView"));
            break;
            default:
            this.oSplitApp.toDetail(this.byId("defaultDetail"));
            break;

           }
           
        }

        //#endregion
    });
});