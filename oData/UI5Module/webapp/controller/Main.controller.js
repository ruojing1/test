sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("training.bi.UI5Module.controller.Main", {
			onInit: function () {
                debugger;
            },
            
            handleItemPress: function(oEvent){
                var oItem = oEvent.getParameter("listItem");
                var sPath = oItem.getBindingContext().getPath();
                this.byId("idSplitter").bindElement(sPath);
            }
		});
	});
