import type { PolyfillIdentifier } from './types/PolyfillIdentifier';
declare class PolyfillRegistry {
    private readonly registry;
    get(...pi: PolyfillIdentifier[]): string[];
}
declare const polyfillRegistry: PolyfillRegistry;
export { polyfillRegistry as PolyfillRegistry };
