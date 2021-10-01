sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("casethree.controller.Detail", {
        /**
         * @override
         */
        onInit: function() {
                debugger;
            //  var oModel= new JSONModel();
            // debugger;
            //  var aData = this.getView().getModel().getData();
            //  var aData = sap.ui.getCore().getModel("objectModel").getData();
            // var aData = sap.ui.getCore()._aData;

                // "Types": [
                //     {   "typeId":"1",
                //         "type":"Raporlu"
                //     },
                //     {   "typeId":"2",
                //         "type":"Ücretli"
                //     },
                //     {   "typeId":"3",
                //         "type":"Ücretsiz"
                //     }
                // ]
                
            
            // oModel.setData(aData);
            // sap.ui.getCore().setModel(oModel);
            // this.getView().setModel(oModel);
            // oModel.refresh();
        
        },
        calculate: function (days) {
            var startDate = new Date(this.getView().byId("Input3").getText());
            var endDate = new Date(this.getView().byId("Input4").getText());
            var diff = Math.abs(startDate.getTime() - endDate.getTime());
            var diffD = Math.ceil(diff / (1000 * 60 * 60 * 24));
            this.getView().byId("Input5").setText(diffD);
            return diffD;
        }
	});
});