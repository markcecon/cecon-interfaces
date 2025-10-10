import { IPayioDeviceActivation } from '../interfaces/i-device-activation';

export class PayioDeviceActivationEntity implements IPayioDeviceActivation {
  public appId: string | null = null;
  public activationId: string | null = null;
  public activationKey: string | null = null;

  constructor(data?: Partial<PayioDeviceActivationEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
