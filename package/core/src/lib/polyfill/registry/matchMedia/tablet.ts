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
        // Define typical tablet width range
        const tabletMinWidth = 600;
        const tabletMaxWidth = 1024;
        // Evaluate if the query matches the tablet range
        let matches = false;
        if (minWidth !== null && maxWidth !== null) {
            matches = minWidth >= tabletMinWidth && maxWidth <= tabletMaxWidth;
        } else if (minWidth !== null) {
            matches = minWidth >= tabletMinWidth;
        } else if (maxWidth !== null) {
            matches = maxWidth <= tabletMaxWidth;
        }
        // Handle orientation
        if (
            query.includes('orientation: portrait') ||
            query.includes('orientation: landscape')
        ) {
            // Tablets can be used in both orientations queries
            matches = true;
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
    identifiers: [Device.TABLET],
    fn: matchMedia,
};

export { polyfill };
