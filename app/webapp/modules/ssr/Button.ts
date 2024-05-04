import MButton from 'sap/m/Button';
// @ts-expect-error Renderers are untyped
import ButtonRenderer from 'sap/m/ButtonRenderer';
import RenderManager from 'sap/ui/core/RenderManager';

/**
 * @namespace com.github.dfenerski.ui5_ssr.modules.ssr
 */
export default class Button extends MButton {
    public static readonly metadata = {};

    public static readonly renderer = {
        apiVersion: 4,
        render: (rm: RenderManager, button: Button) => {
            const preservedContent$ = <any>(
                RenderManager.findPreservedContent(button.getId())
            );
            const preservedContent: HTMLElement = preservedContent$[0];
            if (preservedContent) {
                preservedContent.remove();
                rm.unsafeHtml(preservedContent.outerHTML);
                console.error('Preserved content rendered');
                return;
            }
            ButtonRenderer.render(rm, button);
        },
    };

    // The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
    constructor(idOrSettings?: string | $ButtonSettings);
    constructor(id?: string, settings?: $ButtonSettings);
    constructor(id?: string, settings?: $ButtonSettings) {
        super(id, settings);
    }
}
