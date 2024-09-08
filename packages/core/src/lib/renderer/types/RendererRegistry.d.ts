import type { Renderer } from '../Renderer';
import type { IRendererConfiguration } from '../interfaces/IRendererConfiguration';
export type RendererRegistry = Map<IRendererConfiguration, Renderer>;
