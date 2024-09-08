import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const innerHeight = () =>
    Object.defineProperty(window, 'innerHeight', {
        get() {
            return 812;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.innerHeight,
    identifiers: [Device.PHONE],
    fn: innerHeight,
};

export { polyfill };
