import { userAgent as desktopLinuxChrome } from '../polyfill/registry/userAgent/desktop.linux.chrome';
import { userAgent as desktopLinuxFirefox } from '../polyfill/registry/userAgent/desktop.linux.firefox';
import { userAgent as desktopMacintoshChrome } from '../polyfill/registry/userAgent/desktop.macintosh.chrome';
import { userAgent as desktopMacintoshSafari } from '../polyfill/registry/userAgent/desktop.macintosh.safari';
import { userAgent as desktopWindowsChrome } from '../polyfill/registry/userAgent/desktop.windows.chrome';
import { userAgent as desktopWindowsFirefox } from '../polyfill/registry/userAgent/desktop.windows.firefox';
import { userAgent as phoneAndroidAndroid } from '../polyfill/registry/userAgent/phone.android.android';
import { userAgent as phoneAndroidChrome } from '../polyfill/registry/userAgent/phone.android.chrome';
import { userAgent as phoneAndroidFirefox } from '../polyfill/registry/userAgent/phone.android.firefox';
import { userAgent as phoneIosChrome } from '../polyfill/registry/userAgent/phone.ios.chrome';
import { userAgent as phoneIosFirefox } from '../polyfill/registry/userAgent/phone.ios.firefox';
import { userAgent as phoneIosSafari } from '../polyfill/registry/userAgent/phone.ios.safari';
import { IRendererConfiguration } from '../renderer/interfaces/IRendererConfiguration';
import { Translator } from './Translator';

class ConfigToUaTranslator extends Translator<IRendererConfiguration, string> {
    private readonly registry = [
        desktopLinuxChrome,
        desktopLinuxFirefox,
        desktopMacintoshChrome,
        desktopMacintoshSafari,
        desktopWindowsChrome,
        desktopWindowsFirefox,
        phoneAndroidAndroid,
        phoneAndroidChrome,
        phoneAndroidFirefox,
        phoneIosChrome,
        phoneIosFirefox,
        phoneIosSafari,
    ];

    public translate({ device, os, browser }: IRendererConfiguration): string {
        return (
            this.registry.find(({ identifiers }) => {
                identifiers.every((identifier) =>
                    [device, os, browser].includes(identifier),
                );
            })?.value || ''
        );
    }
}

const translator = new ConfigToUaTranslator();

export { translator as ConfigToUaTranslator };
