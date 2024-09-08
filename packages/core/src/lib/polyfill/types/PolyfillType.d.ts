import { Polyfill } from '../misc/polyfill';
export type PolyfillType = (typeof Polyfill)[keyof typeof Polyfill];
