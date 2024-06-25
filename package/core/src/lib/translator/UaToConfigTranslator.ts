import { UAParser } from 'ua-parser-js';
import { Browser } from '../misc/browser';
import { Device } from '../misc/device';
import { OS } from '../misc/os';
import { IRendererConfiguration } from '../renderer/interfaces/IRendererConfiguration';
import { Translator } from './Translator';

class UaToConfigTranslator extends Translator<string, IRendererConfiguration> {
    private readonly parser = new UAParser();

    public translate(ua: string): IRendererConfiguration {
        const { browser, device, os } = this.parser.setUA(ua).getResult();
        //
        return {
            device: (() => {
                if (device.type === 'mobile') {
                    return Device.PHONE;
                } else if (device.type === 'tablet') {
                    return Device.TABLET;
                } else if (
                    ![
                        'wearable',
                        'mobile',
                        'console',
                        'tablet',
                        'smarttv',
                        'embedded',
                    ].includes(device.type!)
                ) {
                    return Device.DESKTOP;
                }
                return Device.COMBI;
            })(),
            os: (() => {
                if (os.name?.includes('Windows')) {
                    return OS.WINDOWS;
                } else if (os.name === 'Mac OS') {
                    return OS.MACINTOSH;
                } else if (os.name === 'iOS') {
                    return OS.IOS;
                } else if (os.name === 'Android') {
                    return OS.ANDROID;
                }
                return OS.LINUX;
            })(),
            browser: (() => {
                if (
                    ['Chrome', 'Chromium', 'Brave', 'Opera', 'Edge'].includes(
                        <string>browser.name,
                    )
                ) {
                    return Browser.CHROME;
                } else if (['Firefox'].includes(<string>browser.name)) {
                    return Browser.FIREFOX;
                } else if (['Safari'].includes(<string>browser.name)) {
                    return Browser.SAFARI;
                } else if (['Android Browser'].includes(<string>browser.name)) {
                    return Browser.ANDROID;
                }
                return Browser.CHROME;
            })(),
        };
    }
}

const translator = new UaToConfigTranslator();

export { translator as UaToConfigTranslator };
