import type { PolyfillIdentifier } from '../types/PolyfillIdentifier';
import type { PolyfillType } from '../types/PolyfillType';
export interface IPolyFill {
    readonly isDefault: boolean;
    readonly name: PolyfillType;
    readonly identifiers: PolyfillIdentifier[];
    readonly fn: () => void;
}
