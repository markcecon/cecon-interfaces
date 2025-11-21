import { EPayioActivationKeyStatus } from '../../activation-key';
import { IPayioJwtPayloadActivation } from '../interfaces';

export class PayioJwtPayloadActivationEntity implements IPayioJwtPayloadActivation {
  public activationExpiresAt: Date | null = null;
  public activationId: string | null = null;
  public activationKey: string | null = null;
  public activationStatus: EPayioActivationKeyStatus = EPayioActivationKeyStatus.NONE;

  constructor(data?: Partial<PayioJwtPayloadActivationEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
