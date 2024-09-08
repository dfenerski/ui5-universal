import { Browser } from '../../../misc/browser';
import { Device } from '../../../misc/device';
import { OS } from '../../../misc/os';
import type { IUserAgent } from '../../interfaces/IUserAgent';

export const userAgent: IUserAgent = {
    value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
    identifiers: [Device.PHONE, OS.IOS, Browser.SAFARI],
};
