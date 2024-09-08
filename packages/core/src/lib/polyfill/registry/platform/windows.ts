import { OS } from '../../../misc/os';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const platform = () =>
    Object.defineProperty(window.navigator, 'platform', {
        get() {
            return 'Win64';
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.platform,
    identifiers: [OS.WINDOWS],
    fn: platform,
};

export { polyfill };
