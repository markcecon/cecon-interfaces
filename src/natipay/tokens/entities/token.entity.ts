import { INatipayToken } from '../interfaces/i-token';

export class NatipayTokenEntity implements INatipayToken {
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

  constructor(data?: Partial<NatipayTokenEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
