import { UserEntity } from '../../../users';
import { IPayioUserReport } from '../interfaces';
import { IPayioUser } from '../interfaces/i-user';
import { PayioUserSessionEntity } from './user-sessions.entity';

export class PayioUserEntity extends UserEntity implements IPayioUser {
  public accessCode: string | null = null;
  public accessCodeExpiration: Date | null = null;
  public code: string | null = null;
  public faceId: string | null = null;
  public faceImage64: string | null = null;
  public faceLastUpdate: Date | null = null;
  public reports: IPayioUserReport[] = [];
  public sessions: PayioUserSessionEntity[] = [];

  constructor(data?: Partial<PayioUserEntity>) {
    super();
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
