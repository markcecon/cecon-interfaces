import { IPayioDeviceConfig } from '../interfaces/i-device-config';

export class PayioDeviceConfigEntity implements IPayioDeviceConfig {
  public key: string | null = null;
  public value: string | null = null;

  constructor(data?: Partial<PayioDeviceConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
