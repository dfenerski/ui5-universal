import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const innerHeight = () =>
    Object.defineProperty(window, 'innerHeight', {
        get() {
            return 1024;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.innerHeight,
    identifiers: [Device.TABLET],
    fn: innerHeight,
};

export { polyfill };
