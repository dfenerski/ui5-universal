import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';
import Button from 'sap/m/Button';
import CustomListItem from 'sap/m/CustomListItem';
import Input from 'sap/m/Input';
import Label from 'sap/m/Label';
import List from 'sap/m/List';
import Text from 'sap/m/Text';
import Title from 'sap/m/Title';

/**
 * TODO: check whether running instance per theme per devce is needed or
 * if dynamic switching is possible
 */

// Set up a promise to be resolved when an event is fired from the vdom
function waitForCustomEvent(domWindow: any, eventName: string) {
    return new Promise((resolve) => {
        domWindow.addEventListener(eventName, resolve, { once: true });
    });
}

const vdom = new JSDOM(readFileSync('./srv/src/index-vdom.html', 'utf-8'), {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
    resources: 'usable',
    url: 'http://localhost:8080',
});

// Inject the polyfill script
vdom.window.eval(`
    function matchMediaPolyfill(query) {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener: function () {},
            removeListener: function () {},
            addEventListener: function () {},
            removeEventListener: function () {},
            dispatchEvent: function () { return false; }
        };
    }

    if (!window.matchMedia) {
        window.matchMedia = matchMediaPolyfill;
    }

`);

// In the Node context, wait for the custom event
async function waitForVirtualDOMReady() {
    console.log('Waiting for the virtual DOM to be ready...');
    await waitForCustomEvent(vdom.window, 'vdReady');
    console.log('The virtual DOM has emitted the ready event.');
}

waitForVirtualDOMReady().then(() => {
    vdom.window.ssr(
        () =>
            new Button('hwButton', {
                text: 'Hello World',
                press: function () {
                    alert('Hello World');
                },
            }),
    );
    vdom.window.ssr(
        () =>
            new Button('hwButton', {
                text: 'Hello World',
                press: function () {
                    alert('Hello World');
                },
            }),
    );
    vdom.window.ssr(
        () =>
            new Text('hwText', {
                text: 'Hello World',
            }),
    );
    vdom.window.ssr(
        () =>
            new Title('hwTitle', {
                text: 'Hello World',
            }),
    );
    vdom.window.ssr(
        () =>
            new Label('hwLabel', {
                text: 'Hello World',
            }),
    );
    vdom.window.ssr(
        () =>
            new Input('hwInput', {
                value: 'Hello World',
            }),
    );
    vdom.window.ssr(
        () =>
            new List('hwList', {
                items: [
                    new CustomListItem('item1', {
                        content: new Text('item1Text', {
                            text: 'Item 1',
                        }),
                    }),
                    new CustomListItem('item2', {
                        content: new Text('item2Text', {
                            text: 'Item 2',
                        }),
                    }),
                ],
            }),
    );
});
