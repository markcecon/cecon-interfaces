import { EPayioActivationKeyStatus } from '../../activation-key/enums/activation-key-status.enum';
import { PayioPermissionEntity } from '../../permissions';
import { EPayioJwtTokenType } from '../enums';
import { IPayioJwtPayload } from '../interfaces/i-payload';
import { IPayioJwtPayloadApp } from '../interfaces/i-payload-app';
import { IPayioJwtPayloadInfo } from '../interfaces/i-payload-info';
import { PayioJwtPayloadDeviceEntity } from './payload-device.entity';
import { PayioJwtPayloadUserEntity } from './payload-user.entity';

export class PayioJwtPayloadEntity implements IPayioJwtPayload {
  // #region Properties (16)

  public activationStatus: EPayioActivationKeyStatus = EPayioActivationKeyStatus.NONE;
  public app: IPayioJwtPayloadApp | null = null;
  public aud: string | string[] = '';
  public device: PayioJwtPayloadDeviceEntity | null = null;
  public distributorId: string | null = null;
  public exp?: number = 0;
  public iat: number = 0;
  public info: IPayioJwtPayloadInfo | null = null;
  public iss: string = '';
  public jti: string = '';
  public permissions: PayioPermissionEntity[] = [];
  public sub: string = '';
  public type: EPayioJwtTokenType | null = null;
  public user: PayioJwtPayloadUserEntity | null = null;

  // #endregion Properties (16)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
