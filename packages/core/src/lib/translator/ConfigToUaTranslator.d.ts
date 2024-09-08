import { IRendererConfiguration } from '../renderer/interfaces/IRendererConfiguration';
import { Translator } from './Translator';
declare class ConfigToUaTranslator extends Translator<IRendererConfiguration, string> {
    private readonly registry;
    translate({ device, os, browser }: IRendererConfiguration): string;
}
declare const translator: ConfigToUaTranslator;
export { translator as ConfigToUaTranslator };
