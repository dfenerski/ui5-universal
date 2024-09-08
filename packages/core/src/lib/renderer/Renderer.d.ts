import { JSDOM, type DOMWindow } from 'jsdom';
import type { GenericRecord } from '../types/GenericRecord';
import type { IRenderer } from './interfaces/IRenderer';
import type { IRendererOptions } from './interfaces/IRendererOptions';
export declare abstract class Renderer<WindowOptions extends GenericRecord = GenericRecord> implements IRenderer {
    protected readonly vdom: JSDOM;
    constructor({ initialContent, polyfills, userAgent, }: IRendererOptions);
    getDomWindow(): DOMWindow & WindowOptions;
    abstract render(...args: unknown[]): string;
}
