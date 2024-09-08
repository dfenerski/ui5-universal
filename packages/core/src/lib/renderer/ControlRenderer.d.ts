import type Control from 'sap/ui/core/Control';
import { Renderer } from './Renderer';
import type { IRendererOptions } from './interfaces/IRendererOptions';
export declare class ControlRenderer extends Renderer<{
    ssr: (controlFactory: () => Control) => string;
}> {
    constructor(options: Omit<IRendererOptions, 'initialContent'>);
    render(controlFactory: () => Control): string;
}
