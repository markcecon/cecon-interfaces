import { NatipayMemberRulesEnum } from '../../members';
import { INatipayJwtPayloadUser } from '../interfaces/i-payload-user';

export class NatipayJwtPayloadUserEntity implements INatipayJwtPayloadUser {
  public email: string | null = null;
  public id: string = '';
  public internationalCode: string = '';
  public memberRule: NatipayMemberRulesEnum | null = null;
  public name: string = '';
  public phoneNumber: string = '';

  constructor(data?: Partial<NatipayJwtPayloadUserEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
