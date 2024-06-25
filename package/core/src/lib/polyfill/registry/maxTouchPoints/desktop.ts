import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const maxTouchPoints = () =>
    Object.defineProperty(window.navigator, 'maxTouchPoints', {
        get() {
            return 0;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.maxTouchPoints,
    identifiers: [Device.DESKTOP],
    fn: maxTouchPoints,
};

export { polyfill };
