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

				var aData={ "path":"casethree.view.Detail"};
				oModel.setData(aData);
				sap.ui.getCore().setModel(oModel);
				this.getView().setModel(oModel);
				oModel.refresh();

				debugger;
			},
			goToMainPage: function () {
				window.history.go(-1);
			},
	
			onItemSelected: function (oEvent) {

				var oModel = new JSONModel();
				var aData = {};

				debugger;
				var oSelectedItem = oEvent.getParameter("listItem"); //listItem
				var oContext = oSelectedItem.getBindingContext("objectModel").getObject();// modelimizin adı objectModel
				aData = oContext;

				oModel.setData(aData);
				sap.ui.getCore().setModel(oModel);
				this.getView().setModel(oModel);
				oModel.refresh();
				// sap.ui.getCore()._aData = aData;

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
			
		});
	});
