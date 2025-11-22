import { EPayioActivationKeyStatus } from '../..';
import { IPayioJwtPayloadDevice } from '../interfaces/i-payload-device';
/**
 * @deprecated Use PayioJwtPayloadMachineEntity instead
 */
export class PayioJwtPayloadDeviceEntity implements IPayioJwtPayloadDevice {
  public activationId: string | null = '';
  public activationKey: string | null = '';
  public activationStatus: EPayioActivationKeyStatus = EPayioActivationKeyStatus.NONE;
  public bigChefConfigId: string | null = '';
  public cashConfigId: string | null = '';
  public chefConfigId: string | null = '';
  public id: string = '';
  public name: string | null = '';
  public scheduleId: string | null = '';
  public smartConfigId: string | null = '';

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
