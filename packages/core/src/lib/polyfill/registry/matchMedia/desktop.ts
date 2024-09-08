import { Device } from '../../../misc/device';
import type { IPolyFill } from '../../interfaces/IPolyFill';
import { Polyfill } from '../../misc/polyfill';

const matchMedia = () => {
    window.matchMedia ??= (query) => {
        // Function to extract min and max width from the query
        const extractWidth = (query: string, type: string) => {
            const regex = new RegExp(`${type}-width:\\s*(\\d+)px`);
            const match = query.match(regex);
            return match ? parseInt(match[1], 10) : null;
        };
        // Extract min and max widths
        const minWidth = extractWidth(query, 'min');
        const maxWidth = extractWidth(query, 'max');
        // Define typical desktop width range
        const desktopMinWidth = 1025; // Generally, desktops have widths larger than 1024px
        // Evaluate if the query matches the desktop range
        let matches = false;
        if (minWidth !== null && maxWidth !== null) {
            matches =
                minWidth >= desktopMinWidth && maxWidth >= desktopMinWidth;
        } else if (minWidth !== null) {
            matches = minWidth >= desktopMinWidth;
        } else if (maxWidth !== null) {
            matches = maxWidth >= desktopMinWidth;
        }
        // Handle orientation queries
        if (
            query.includes('orientation: portrait') ||
            query.includes('orientation: landscape')
        ) {
            matches = true; // Desktops can be used in both orientations, although landscape is more common
        }
        //
        return {
            matches: matches,
            media: query,
            onchange: null,
            addListener: () => {
                //
            },
            removeListener: () => {
                //
            },
            addEventListener: () => {
                //
            },
            removeEventListener: () => {
                //
            },
            dispatchEvent: () => false,
        };
    };
};

const polyfill: IPolyFill = {
    isDefault: false,
    name: Polyfill.matchMedia,
    identifiers: [Device.DESKTOP],
    fn: matchMedia,
};

export { polyfill };
