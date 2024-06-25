import { Browser } from '../../../misc/browser';
import { Device } from '../../../misc/device';
import { OS } from '../../../misc/os';
import type { IUserAgent } from '../../interfaces/IUserAgent';

export const userAgent: IUserAgent = {
    value: 'Mozilla/5.0 (Linux; U; Android 12; en-us; Nexus 5 Build/FRF91) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36',
    identifiers: [Device.PHONE, OS.ANDROID, Browser.ANDROID],
};
