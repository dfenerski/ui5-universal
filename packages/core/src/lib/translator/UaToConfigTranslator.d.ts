import { IRendererConfiguration } from '../renderer/interfaces/IRendererConfiguration';
import { Translator } from './Translator';
declare class UaToConfigTranslator extends Translator<string, IRendererConfiguration> {
    private readonly parser;
    translate(ua: string): IRendererConfiguration;
}
declare const translator: UaToConfigTranslator;
export { translator as UaToConfigTranslator };
