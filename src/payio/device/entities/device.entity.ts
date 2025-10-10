import { IPayioDevice } from '../interfaces/i-device';
import { IPayioDeviceActivation } from '../interfaces/i-device-activation';
import { IPayioDeviceConfig } from '../interfaces/i-device-config';

export class PayioDeviceEntity implements IPayioDevice {
  public activations: IPayioDeviceActivation[] = [];
  public active: boolean = false;
  public configs: IPayioDeviceConfig[] = [];
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public id: string = '';
  public lastAccess: Date = new Date();
  public name: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioDeviceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
