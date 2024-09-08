import { readFileSync } from 'node:fs';
import type Control from 'sap/ui/core/Control';
import { Renderer } from './Renderer';
import type { IRendererOptions } from './interfaces/IRendererOptions';

export class ControlRenderer extends Renderer<{
    ssr: (controlFactory: () => Control) => string;
}> {
    public constructor(options: Omit<IRendererOptions, 'initialContent'>) {
        super({
            initialContent: readFileSync(
                './templates/control-renderer.html',
                'utf-8',
            ),
            ...options,
        });
    }

    public render(controlFactory: () => Control): string {
        return this.getDomWindow().ssr(controlFactory);
    }
}
