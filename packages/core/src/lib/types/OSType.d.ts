import type { OS } from '../misc/os';
export type OSType = (typeof OS)[keyof typeof OS];
