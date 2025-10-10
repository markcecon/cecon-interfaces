import { IPayioDeviceActivation } from './i-device-activation';
import { IPayioDeviceConfig } from './i-device-config';
export interface IPayioDevice {
  activations: IPayioDeviceActivation[];
  active: boolean;
  companyId: string;
  containerId: string;
  createdAt: Date;
  deviceId: string;
  id: string;
  configs: IPayioDeviceConfig[];
  lastAccess: Date;
  name: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
}
