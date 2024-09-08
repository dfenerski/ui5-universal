import type { PolyfillIdentifier } from '../types/PolyfillIdentifier';
export interface IUserAgent {
    readonly value: string;
    readonly identifiers: PolyfillIdentifier[];
}
