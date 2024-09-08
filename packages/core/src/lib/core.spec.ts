import { JSDOM, ResourceLoader } from 'jsdom';

describe('core', () => {
    const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
        // https://github.com/jsdom/jsdom/issues/3325
        resources: new ResourceLoader({
            userAgent: 'node.js',
        }),
    });
    it('platform should be empty', () => {
        expect(jsdom.window.navigator.platform).toEqual('');
    });
    it('userAgent should be inferred from ResourceLoader constructor', () => {
        expect(jsdom.window.navigator.userAgent).toEqual('node.js');
    });
});
