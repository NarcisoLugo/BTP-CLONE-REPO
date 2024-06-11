/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapbtp/helloworldui5_clon/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
