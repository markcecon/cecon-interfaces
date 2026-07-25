import { IPayioJwtPayloadDevice } from '../interfaces/i-payload-device';

/**
 * @deprecated Use PayioJwtPayloadMachineEntity instead
 */
export class PayioJwtPayloadDeviceEntity implements IPayioJwtPayloadDevice {
  public id: string = '';
  public name: string | null = '';

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
