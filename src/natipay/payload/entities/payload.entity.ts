import { INatipayJwtPayload } from '../interfaces/i-payload';
import { INatipayJwtPayloadApp } from '../interfaces/i-payload-app';
import { INatipayJwtPayloadInfo } from '../interfaces/i-payload-info';
import { NatipayJwtPayloadDeviceEntity } from './payload-device.entity';
import { NatipayJwtPayloadUserEntity } from './payload-user.entity';

export class NatipayJwtPayloadEntity implements INatipayJwtPayload {
  // #region Properties (16)

  public app: INatipayJwtPayloadApp | null = null;
  public aud: string | string[] = '';
  public device: NatipayJwtPayloadDeviceEntity | null = null;
  public exp?: number = 0;
  public iat: number = 0;
  public info: INatipayJwtPayloadInfo | null = null;
  public iss: string = '';
  public jti: string = '';
  public sub: string = '';
  public type: string | null = null;
  public user: NatipayJwtPayloadUserEntity | null = null;

  // #endregion Properties (16)

  // #region Constructors (1)

  constructor(data?: Partial<NatipayJwtPayloadEntity>) {
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
