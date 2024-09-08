import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const innerHeight = () =>
    Object.defineProperty(window, 'innerHeight', {
        get() {
            return 1080;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.innerHeight,
    identifiers: [Device.DESKTOP],
    fn: innerHeight,
};

export { polyfill };
