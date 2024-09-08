import { Renderer } from './Renderer';

// https://www.npmjs.com/package/jsdom#advanced-configuration

export class AppRenderer extends Renderer {
    public render() {
        return this.vdom.serialize();
    }
}
