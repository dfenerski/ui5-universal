import BaseController from "./BaseController";

/**
 * @namespace com.github.dfenerski.ui5_universal.static_app.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}
}
