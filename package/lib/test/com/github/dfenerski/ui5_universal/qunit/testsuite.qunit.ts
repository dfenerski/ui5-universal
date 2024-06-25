export default {
	name: "QUnit TestSuite for com.github.dfenerski.ui5_universal",
	defaults: {
		bootCore: true,
		ui5: {
			libs: "sap.ui.core,com.github.dfenerski.ui5_universal",
			theme: "sap_horizon",
			noConflict: true,
			preload: "auto"
		},
		qunit: {
			version: 2,
			reorder: false
		},
		sinon: {
			version: 4,
			qunitBridge: true,
			useFakeTimers: false
		},
		module: "./{name}.qunit"
	},
	tests: {
		// test file for the Example control
		Example: {
			title: "QUnit Test for Example",
			_alternativeTitle: "QUnit tests: com.github.dfenerski.ui5_universal.Example"
		}
	}
};
