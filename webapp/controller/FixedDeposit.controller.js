sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("cpapp.finance.controller.FixedDeposit", {
        onInit() {
            this.oModel = this.getView().getModel('mainModel');

           
        },
        onAfterRendering(){
            const oTable = this.byId("idDepositTable");

            const oTemplate = new sap.m.ColumnListItem({
              cells: [
                new sap.m.Text({ text: "{mainModel>NAME}" }),     // Name column
                new sap.m.Text({ text: "{mainModel>BANK}" }),     // Bank column
                new sap.m.Text({ text: "{mainModel>DATE}" }),     // Deposit Date column
                new sap.m.Text({ text: "{mainModel>AMOUNT}" })    // Amount column
              ]
            });
          
            oTable.bindItems({
              path: "mainModel>/getDeposit",  // Binding path to getDeposit entity set
              template: oTemplate,            // Template for items
              sorter: new sap.ui.model.Sorter("NAME")  // Sorter based on Name column
            });
        }

        //#region Events


        //#endregion
    });
});