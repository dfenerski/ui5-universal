/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Control from 'sap/ui/core/Control';
import ElementMetadata from 'sap/ui/core/ElementMetadata';
import RenderManager from 'sap/ui/core/RenderManager';

// @ts-expect-error Property is untyped
const getRenderer = ElementMetadata.prototype.getRenderer;
// @ts-expect-error Property is untyped
ElementMetadata.prototype.getRenderer = function (): RenderManager {
    const renderer = getRenderer.call(this);
    // Abort if class has no renderer
    if (!renderer) {
        return renderer;
    }
    const controlClass = this.getClass();
    const render = renderer.render;
    const onAfterRendering = controlClass.prototype.onAfterRendering;
    // Attach check for prerendered content
    renderer.render = function (rm: RenderManager, control: Control) {
        // const preservedContent$ = <any>(
        //     RenderManager.findPreservedContent(control.getId())
        // );
        const preservedContent = document.querySelector(
            `#sap-ui-ssr #${control.getId()}`,
        );
        if (preservedContent) {
            // preservedContent.remove();
            rm.unsafeHtml(preservedContent.outerHTML);
            console.error('Preserved content rendered');
            return;
        }
        render.call(renderer, rm, control);
    };
    // Attach cleanup hook
    controlClass.prototype.onAfterRendering = function () {
        const preservedContent = document.querySelector(
            `#sap-ui-ssr #${this.getId()}`,
        );
        if (preservedContent) {
            preservedContent.remove();
        }
        onAfterRendering.call(this);
    };
    return renderer;
};
