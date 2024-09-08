import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const maxTouchPoints = () =>
    Object.defineProperty(window.navigator, 'maxTouchPoints', {
        get() {
            return 5;
        },
        configurable: true,
    });

const polyfill: IPolyFill = {
    isDefault: true,
    name: Polyfill.maxTouchPoints,
    identifiers: [Device.PHONE],
    fn: maxTouchPoints,
};

export { polyfill };
