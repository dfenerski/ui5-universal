import Device from 'sap/ui/Device';
import Control from 'sap/ui/core/Control';
import RenderManager from 'sap/ui/core/RenderManager';
import UIComponent from 'sap/ui/core/UIComponent';
import models from './model/models';

/**
 * @namespace com.github.dfenerski.ui5_ssr
 */
export default class Component extends UIComponent {
    public static metadata = {
        manifest: 'json',
        interfaces: ['sap.ui.core.IAsyncContentCreation'],
    };

    private contentDensityClass: string;

    public init(): void {
        // call the base component's init function
        super.init();

        // create the device model
        this.setModel(models.createDeviceModel(), 'device');

        // create the app model
        this.setModel(models.createAppModel(), 'app');

        // create the views based on the url/hash
        this.getRouter().initialize();

        const SSR_CONTROLS = ['sap.m.Button'];
        // @ts-expect-error behold
        const getRenderer = sap.ui.core.ElementMetadata.prototype.getRenderer;
        // @ts-expect-error behold
        sap.ui.core.ElementMetadata.prototype.getRenderer = function () {
            const renderer = getRenderer.call(this);
            //
            if (SSR_CONTROLS.includes(this.getName())) {
                const render = renderer.render;
                renderer.render = function (
                    rm: RenderManager,
                    control: Control,
                ) {
                    const preservedContent$ = <any>(
                        RenderManager.findPreservedContent(control.getId())
                    );
                    const preservedContent: HTMLElement = preservedContent$[0];
                    if (preservedContent) {
                        preservedContent.remove();
                        rm.unsafeHtml(preservedContent.outerHTML);
                        console.error('Preserved content rendered');
                        return;
                    }
                    render.call(renderer, rm, control);
                };
            }
            return renderer;
        };
    }

    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     * @public
     * @returns css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    public getContentDensityClass(): string {
        if (this.contentDensityClass === undefined) {
            // check whether FLP has already set the content density class; do nothing in this case
            if (
                document.body.classList.contains('sapUiSizeCozy') ||
                document.body.classList.contains('sapUiSizeCompact')
            ) {
                this.contentDensityClass = '';
            } else if (!Device.support.touch) {
                // apply "compact" mode if touch is not supported
                this.contentDensityClass = 'sapUiSizeCompact';
            } else {
                // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                this.contentDensityClass = 'sapUiSizeCozy';
            }
        }
        return this.contentDensityClass;
    }
}
