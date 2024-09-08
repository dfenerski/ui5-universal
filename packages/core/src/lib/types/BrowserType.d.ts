import type { Browser } from '../misc/browser';
export type BrowserType = (typeof Browser)[keyof typeof Browser];
