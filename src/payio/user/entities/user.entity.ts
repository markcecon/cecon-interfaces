import { UserEntity } from '../../../users';
import { IPayioUser } from '../interfaces/i-user';
import { PayioUserSessionEntity } from './user-sessions.entity';

export class PayioUserEntity extends UserEntity implements IPayioUser {
  public code: string | null = null;
  public password: string | null = null;
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
