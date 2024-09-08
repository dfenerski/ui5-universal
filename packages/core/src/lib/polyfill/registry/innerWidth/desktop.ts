import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const innerWidth = () =>
    Object.defineProperty(window, 'innerWidth', {
        get() {
            return 1920;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.innerWidth,
    identifiers: [Device.DESKTOP],
    fn: innerWidth,
};

export { polyfill };
