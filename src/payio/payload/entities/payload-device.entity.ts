import { IPayioJwtPayloadDevice } from '../interfaces/i-payload-device';

export class PayioJwtPayloadDeviceEntity implements IPayioJwtPayloadDevice {
  public id: string = '';
  public name: string | null = '';
  public uid: string | null = null;

  constructor(data?: Partial<PayioJwtPayloadDeviceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
