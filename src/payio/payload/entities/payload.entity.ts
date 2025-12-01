import { PayioJwtPayloadActivationEntity, PayioJwtPayloadAppEntity, PayioJwtPayloadInfoEntity } from '../..';
import { EPayioJwtTokenType } from '../enums';
import { IPayioJwtPayload } from '../interfaces/i-payload';
import { PayioJwtPayloadDeviceEntity } from './payload-device.entity';
import { PayioJwtPayloadMachineEntity } from './payload-machine.entity';
import { PayioJwtPayloadUserEntity } from './payload-user.entity';
/** @deprecated use PayioJwtPayloadEntity from @arcnet-payio-interfaces instead */
export class PayioJwtPayloadEntity implements IPayioJwtPayload {
  public activation?: PayioJwtPayloadActivationEntity | null | undefined;
  public app: PayioJwtPayloadAppEntity | null = null;
  public aud: string | string[] = '';
  /** @deprecated use machine instead */
  public device?: PayioJwtPayloadDeviceEntity | null = null;
  public distributorId: string | null = null;
  public exp?: number = 0;
  public iat: number = 0;
  public info: PayioJwtPayloadInfoEntity | null = null;
  public iss: string = '';
  public jti: string = '';
  public machine: PayioJwtPayloadMachineEntity | null = null;
  public permissions: string[] = [];
  public sub: string = '';
  public type: EPayioJwtTokenType | null = null;
  public user: PayioJwtPayloadUserEntity | null = null;

  constructor(data?: Partial<PayioJwtPayloadEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
