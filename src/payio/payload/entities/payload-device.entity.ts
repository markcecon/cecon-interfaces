import { EPayioActivationKeyStatus } from '../../activation-key/enums/activation-key-status.enum';
import { IPayioJwtPayloadDevice } from '../interfaces/i-payload-device';

export class PayioJwtPayloadDeviceEntity implements IPayioJwtPayloadDevice {
  public activationId: string | null = '';
  public activationKey: string | null = '';
  public activationStatus: EPayioActivationKeyStatus = EPayioActivationKeyStatus.NONE;
  public chefConfigId: string | null = '';
  public id: string = '';
  public name: string | null = '';
  public scheduleId: string | null = '';

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
