import { BaseEntity } from '../../general';
import { MemberRulesEnum, MemberTypeEnum } from '../enums';
import { IMember } from '../interfaces';

export class MemberEntity extends BaseEntity implements IMember {
  // #region Properties (18)

  public active: boolean = true;
  public companyName: string = '';
  public containerName: string = '';
  public developerId: string | null = null;
  public email: string = '';
  public imageUrl: string | null = '';
  public internationalCode: string = '55';
  public name: string = '';
  public partnerId: string | null = '';
  public phoneNumber: string = '';
  public phoneNumberVerified: boolean = false;
  public phoneNumberVerifiedAt: Date | null = null;
  /**
   * @deprecated Use `imageUrl` instead
   */
  public photoUrl: string | null = '';
  public rule: MemberRulesEnum = MemberRulesEnum.USER;
  public tags: string[] = [];
  public type: MemberTypeEnum | null = MemberTypeEnum.CLIENT;
  /**
   * @deprecated Use `id` instead.
   */
  public uid: string = '';

  // #endregion Properties (18)

  // #region Constructors (1)

  constructor(data?: Partial<MemberEntity>) {
    super(data);
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
