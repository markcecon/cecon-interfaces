import { EPayioUserType } from '../enums/user-type.enum';
import { IPayioJwtPayloadUser } from '../interfaces/i-payload-user';

export class PayioJwtPayloadUserEntity implements IPayioJwtPayloadUser {
  public email: string | null = null;
  public id: string = '';
  public internationalCode: string = '';
  public name: string = '';
  public phoneNumber: string = '';
  public type: EPayioUserType | null = null;
  public isAdmin: boolean = false;

  constructor(data?: Partial<PayioJwtPayloadUserEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
