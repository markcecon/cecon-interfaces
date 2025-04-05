import { NatipayMemberTypeEnum } from '../../natipay';
import { PayioUserTypeEnum } from '../enums';
import { IUser } from '../interfaces';

export class UserEntity implements IUser {
  // #region Properties (16)

  public accessCount: number = 0;
  public active: boolean = true;
  public code: string | null = null;
  public createdAt: Date = new Date();
  public currentCompanyId: string | null = null;
  public currentCompanyName: string | null = null;
  public email: string | null = null;
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public lastAccessAt: Date = new Date();
  public name: string = '';
  public phoneNumber: string = '';
  public tags: string[] = [];
  public type: PayioUserTypeEnum | NatipayMemberTypeEnum = PayioUserTypeEnum.NONE;
  public updatedAt: Date = new Date();

  // #endregion Properties (16)

  // #region Constructors (1)

  constructor(data?: Partial<UserEntity>) {
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
