sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("casethree.controller.Main", {
			onInit: function () {
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData("./model/objects.json");
				this.getView().setModel(oModel, "objectModel");
				
			},
			goToMainPage: function () {
				window.history.go(-1);
			},
	
			onItemSelected: function (oEvent) {

				var oModel = new JSONModel();
				var aData = {};
				var that = this;
				
				
				var oSelectedItem = oEvent.getParameter("listItem"); //listItem
				var oContext = oSelectedItem.getBindingContext("objectModel").getObject();// modelimizin adı objectModel
				aData = oContext;

				oModel.setData(aData);
				sap.ui.getCore().setModel(oModel);
				that.getView().setModel(oModel);
				oModel.refresh();

			},
	
			onClick: function (oEvent) {
			
				this.getView().byId("list");
				var sPath = this.getView().byId("list").getSelectedItem().getBindingContext().getPath();
				var iIndex = sPath.split("/")[2];
				var oModel = this.getView().getModel();
				var oData = oModel.oData;
				var removed = oData.employee.splice(iIndex, 1);
				oModel.refresh(true);
			},
			calculate: function (days) {
				var startDate = new Date(this.getView().byId("Input3").getText());
				var endDate = new Date(this.getView().byId("Input4").getText());
				var diff = Math.abs(startDate.getTime() - endDate.getTime());
				var diffD = Math.ceil(diff / (1000 * 60 * 60 * 24));
				this.getView().byId("Input5").setText(diffD);
				return diffD;
			},
		});
	});
