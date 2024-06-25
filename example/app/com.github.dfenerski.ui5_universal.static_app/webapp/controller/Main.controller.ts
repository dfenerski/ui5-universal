import MessageBox from 'sap/m/MessageBox';
import BaseController from './BaseController';

/**
 * @namespace com.github.dfenerski.ui5_universal.static_app.controller
 */
export default class Main extends BaseController {
    public onAfterRendering(): void {
        window.dispatchEvent(
            new CustomEvent('ui5ViewRendered', {
                detail: {
                    viewName: this.getView().getViewName(),
                },
            }),
        );
    }

    public sayHello(): void {
        MessageBox.show('Hello World!');
    }

    public handleSettingsButtonPress() {
        MessageBox.show('Settings button pressed');
    }
}
