import type { ControlRenderer } from '../ControlRenderer';
import type { Renderer } from '../Renderer';
import type { IRendererConfiguration } from './IRendererConfiguration';
import type { IRendererOptions } from './IRendererOptions';
export interface IRenderManagerOptions<R extends Renderer> {
    readonly initialContent: R extends ControlRenderer ? never : string;
    readonly configurations: IRendererConfiguration[];
    readonly rendererFactory: new (options: IRendererOptions) => R;
}
