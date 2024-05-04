import MessageToast from 'sap/m/MessageToast';
import Page from 'sap/m/Page';
import RenderManager from 'sap/ui/core/RenderManager';
import BaseController from './BaseController';

/**
 * @namespace com.github.dfenerski.ui5_ssr.controller
 */
export default class Main extends BaseController {
    public handleDemoButtonPress(): void {
        MessageToast.show('Demo button pressed');
    }

    public handleActionButtonPress(): void {
        const page = <Page>this.getView().byId('mainPage');
        const html = page.getContent()[1];
        //
        RenderManager.preserveContent(
            document.getElementById('__component0---main--demoButton'),
            true,
            false,
        );
    }
}
