import { OS } from '../../../misc/os';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const devicePixelRatio = () =>
    Object.defineProperty(window, 'devicePixelRatio', {
        get() {
            return 2;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.devicePixelRatio,
    identifiers: [OS.IOS],
    fn: devicePixelRatio,
};

export { polyfill };
