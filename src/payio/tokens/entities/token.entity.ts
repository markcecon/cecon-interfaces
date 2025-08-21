import { IPayioToken } from '../interfaces/i-token';

export class PayioTokenEntity implements IPayioToken {
  // #region Properties (12)

  public appId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string | null = null;
  public expiresAt: Date = new Date();
  public id: string = '';
  public ipAddress: string | null = null;
  public isRevoked: boolean = false;
  public refreshToken: string = '';
  public revokedAt: Date | null = null;
  public sandbox: boolean = false;
  public updatedAt: Date = new Date();
  public userAgent: string | null = null;
  public userId: string = '';

  // #endregion Properties (12)

  // #region Constructors (1)

  constructor(data?: Partial<PayioTokenEntity>) {
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
