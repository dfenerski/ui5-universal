import { readFileSync } from 'fs';
import Button from 'sap/m/Button';
import { PolyfillRegistry } from './polyfill/PolyfillRegistry';
import { AppRenderer } from './renderer/AppRenderer';
import { ControlRenderer } from './renderer/ControlRenderer';
import { PreRenderer } from './renderer/PreRenderer';
import { RenderManager } from './renderer/RenderManager';
import { ConfigToUaTranslator } from './translator/ConfigToUaTranslator';
import { UaToConfigTranslator } from './translator/UaToConfigTranslator';

const ua =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3';
const { device, os, browser } = UaToConfigTranslator.translate(ua);

const controlRenderer = new ControlRenderer({
    polyfills: PolyfillRegistry.get(device, os, browser),
    userAgent: ua,
});

const appRenderer = new AppRenderer({
    initialContent: readFileSync('./assets/app.html', 'utf-8'),
    polyfills: PolyfillRegistry.get(device, os, browser),
    userAgent: ua,
});

const preRenderer = new PreRenderer({
    initialContent: readFileSync('./assets/app.html', 'utf-8'),
    polyfills: PolyfillRegistry.get(device, os, browser),
    userAgent: ConfigToUaTranslator.translate({ device, os, browser }),
});

const renderManager = new RenderManager({
    // configurations: [{ device, os, browser }],
    configurations: [{ device, os, browser }],
    // rendererFactory: ControlRenderer,
    // initialContent: readFileSync('./assets/app.html', 'utf-8'),
    rendererFactory: AppRenderer,
    initialContent: readFileSync('./assets/app.html', 'utf-8'),
});

renderManager.render();

controlRenderer.render(
    () =>
        new Button({
            text: 'Hello, World!',
            press: () => {
                alert('Hello, World!');
            },
        }),
);

const server: any = {};

server.on('GET', '/app', () => {
    return controlRenderer.render(
        () =>
            new Button({
                text: 'Hello, World!',
                press: () => {
                    alert('Hello, World!');
                },
            }),
    );
});

server.on('GET', '/app', () => {
    return controlRenderer.render(
        () =>
            new Button({
                text: 'Hello, World!',
                press: () => {
                    alert('Hello, World!');
                },
            }),
    );
});
