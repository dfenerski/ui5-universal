import { Browser } from '../../../misc/browser';
import { Device } from '../../../misc/device';
import { OS } from '../../../misc/os';
import type { IUserAgent } from '../../interfaces/IUserAgent';

export const userAgent: IUserAgent = {
    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0',
    identifiers: [Device.DESKTOP, OS.WINDOWS, Browser.FIREFOX],
};
