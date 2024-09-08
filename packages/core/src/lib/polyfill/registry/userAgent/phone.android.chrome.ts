import { Browser } from '../../../misc/browser';
import { Device } from '../../../misc/device';
import { OS } from '../../../misc/os';
import type { IUserAgent } from '../../interfaces/IUserAgent';

export const userAgent: IUserAgent = {
    value: 'Mozilla/5.0 (Linux; Android 12; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Mobile Safari/537.36',
    identifiers: [Device.PHONE, OS.ANDROID, Browser.CHROME],
};
