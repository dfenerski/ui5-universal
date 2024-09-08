import type { Nullable } from '../types/Nullable';
import type { Renderer } from './Renderer';
import type { IRenderManagerOptions } from './interfaces/IRenderManagerOptions';
import type { IRenderer } from './interfaces/IRenderer';
import type { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import type { RendererRegistry } from './types/RendererRegistry';
export declare class RenderManager<R extends Renderer> implements IRenderer {
    protected readonly rendererRegistry: RendererRegistry;
    constructor({ initialContent, configurations, rendererFactory, }: IRenderManagerOptions<R>);
    render(): string[];
    getRenderer(configuration: IRendererConfiguration): Nullable<Renderer>;
}
