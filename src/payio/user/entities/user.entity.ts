import { UserEntity } from '../../../users';
import { IPayioUserReport } from '../interfaces';
import { IPayioUser } from '../interfaces/i-user';

export class PayioUserEntity extends UserEntity implements IPayioUser {
  public accessCode: string | null = null;
  public accessCodeExpiration: Date | null = null;
  public code: string | null = null;
  public currentCompanyId: string | null = null;
  public currentCompanyName: string | null = null;
  public faceId: string | null = null;
  public faceImage64: string | null = null;
  public faceLastUpdate: Date | null = null;
  public reports: IPayioUserReport[] = [];

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
