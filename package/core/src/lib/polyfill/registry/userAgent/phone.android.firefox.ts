import { Browser } from '../../../misc/browser';
import { Device } from '../../../misc/device';
import { OS } from '../../../misc/os';
import type { IUserAgent } from '../../interfaces/IUserAgent';

export const userAgent: IUserAgent = {
    value: 'Mozilla/5.0 (Android 12; Mobile; rv:103.0) Gecko/103.0 Firefox/103.0',
    identifiers: [Device.PHONE, OS.ANDROID, Browser.FIREFOX],
};
