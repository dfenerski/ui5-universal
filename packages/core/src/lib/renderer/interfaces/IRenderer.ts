export interface IRenderer {
    render(...args: unknown[]): string | string[];
}
