import { Renderer } from './Renderer';

export class PreRenderer extends Renderer {
    public render() {
        return [
            ...this.vdom.window.document
                .querySelectorAll('[data-universal-ssr]')
                .values(),
        ].reduce((acc, el) => {
            return acc + el.outerHTML;
        }, '');
    }
}
