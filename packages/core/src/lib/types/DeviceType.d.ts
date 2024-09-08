import type { Device } from '../misc/device';
export type DeviceType = (typeof Device)[keyof typeof Device];
