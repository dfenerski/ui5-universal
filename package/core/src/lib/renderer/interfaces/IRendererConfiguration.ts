import type { BrowserType } from '../../types/BrowserType';
import type { DeviceType } from '../../types/DeviceType';
import type { OSType } from '../../types/OSType';

export interface IRendererConfiguration {
    readonly device: DeviceType;
    readonly os: OSType;
    readonly browser: BrowserType;
}
