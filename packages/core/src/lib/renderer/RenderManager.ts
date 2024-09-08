import { ConfigToUaTranslator } from '../translator/ConfigToUaTranslator';
import type { Nullable } from '../types/Nullable';
import type { Renderer } from './Renderer';
import type { IRenderManagerOptions } from './interfaces/IRenderManagerOptions';
import type { IRenderer } from './interfaces/IRenderer';
import type { IRendererConfiguration } from './interfaces/IRendererConfiguration';
import type { RendererRegistry } from './types/RendererRegistry';

export class RenderManager<R extends Renderer> implements IRenderer {
    protected readonly rendererRegistry: RendererRegistry = new Map();

    public constructor({
        initialContent,
        configurations,
        rendererFactory,
    }: IRenderManagerOptions<R>) {
        for (const configuration of configurations) {
            this.rendererRegistry.set(
                configuration,
                new rendererFactory({
                    initialContent,
                    polyfills: [
                        configuration.device,
                        configuration.os,
                        configuration.browser,
                    ],
                    userAgent: ConfigToUaTranslator.translate(configuration),
                }),
            );
        }
    }

    public render() {
        return [...this.rendererRegistry.values()].map((renderer) =>
            renderer.render(),
        );
    }

    public getRenderer(
        configuration: IRendererConfiguration,
    ): Nullable<Renderer> {
        return this.rendererRegistry.get(configuration) || null;
    }
}
