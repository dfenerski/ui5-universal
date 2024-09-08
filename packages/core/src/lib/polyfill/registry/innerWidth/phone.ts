import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const innerWidth = () =>
    Object.defineProperty(window, 'innerWidth', {
        get() {
            return 375;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.innerWidth,
    identifiers: [Device.PHONE],
    fn: innerWidth,
};

export { polyfill };
