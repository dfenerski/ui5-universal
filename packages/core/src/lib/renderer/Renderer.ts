import { JSDOM, type DOMWindow } from 'jsdom';
import type { GenericRecord } from '../types/GenericRecord';
import type { IRenderer } from './interfaces/IRenderer';
import type { IRendererOptions } from './interfaces/IRendererOptions';

export abstract class Renderer<
    WindowOptions extends GenericRecord = GenericRecord,
> implements IRenderer
{
    protected readonly vdom: JSDOM;

    public constructor({
        initialContent,
        polyfills,
        userAgent,
    }: IRendererOptions) {
        this.vdom = new JSDOM(initialContent, {
            pretendToBeVisual: true,
            url: 'http://localhost:8080/index.html?sap-ui-debug=true',
            runScripts: 'dangerously',
            //
            // Enabling `resources` causes `eval` calls for polyfills to hang
            // resources: new ResourceLoader({
            userAgent,
            // }),
            resources: 'usable',
        });
        //
        for (const polyfill of polyfills) {
            this.vdom.window.eval(`(${polyfill})()`);
        }
    }

    public getDomWindow(): DOMWindow & WindowOptions {
        return <DOMWindow & WindowOptions>this.vdom.window;
    }

    public abstract render(...args: unknown[]): string;
}
