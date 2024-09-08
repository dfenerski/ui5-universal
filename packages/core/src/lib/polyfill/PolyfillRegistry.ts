import { polyfill as devicePixelRatioIos } from './registry/devicePixelRatio/ios';
import { polyfill as devicePixelRatioMacintosh } from './registry/devicePixelRatio/macintosh';
import { polyfill as innerHeightDesktop } from './registry/innerHeight/desktop';
import { polyfill as innerHeightPhone } from './registry/innerHeight/phone';
import { polyfill as innerHeightTablet } from './registry/innerHeight/tablet';
import { polyfill as innerWidthDesktop } from './registry/innerWidth/desktop';
import { polyfill as innerWidthPhone } from './registry/innerWidth/phone';
import { polyfill as innerWidthTablet } from './registry/innerWidth/tablet';
import { polyfill as matchMediaDesktop } from './registry/matchMedia/desktop';
import {
    polyfill as matchMediaPhone,
    polyfill as maxTouchPointsPhone,
} from './registry/matchMedia/phone';
import { polyfill as matchMediaTablet } from './registry/matchMedia/tablet';
import { polyfill as maxTouchPointsDesktop } from './registry/maxTouchPoints/desktop';
import { polyfill as platformLinux } from './registry/platform/linux';
import { polyfill as platformMacintosh } from './registry/platform/macintosh';
import { polyfill as platformWindows } from './registry/platform/windows';
import type { PolyfillIdentifier } from './types/PolyfillIdentifier';

class PolyfillRegistry {
    private readonly registry = [
        devicePixelRatioIos,
        devicePixelRatioMacintosh,
        innerHeightDesktop,
        innerHeightPhone,
        innerHeightTablet,
        innerWidthDesktop,
        innerWidthPhone,
        innerWidthTablet,
        matchMediaDesktop,
        matchMediaPhone,
        matchMediaTablet,
        maxTouchPointsDesktop,
        maxTouchPointsPhone,
        platformLinux,
        platformMacintosh,
        platformWindows,
    ];

    public get(...pi: PolyfillIdentifier[]): string[] {
        return this.registry
            .filter(
                ({ isDefault, identifiers }) =>
                    isDefault ||
                    identifiers.some(identifier => pi.includes(identifier)),
            )
            .map(({ fn }) => fn.toString());
    }
}

const polyfillRegistry = new PolyfillRegistry();

export { polyfillRegistry as PolyfillRegistry };
