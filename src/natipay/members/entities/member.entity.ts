import { NatipayMemberRulesEnum } from '../enums/member-rules.enum';
import { NatipayMemberTypeEnum } from '../enums/member-type.enum';
import { INatipayMember } from '../interfaces';

export class NatipayMemberEntity implements INatipayMember {
  public active: boolean = true;
  public companyName: string = '';
  public containerName: string = '';
  public createdAt: Date = new Date();
  public email: string = '';
  public id: string = '';
  public imageUrl: string | null = '';
  public internationalCode: string = '55';
  public name: string = '';
  public phoneNumber: string = '';
  public rule: NatipayMemberRulesEnum = NatipayMemberRulesEnum.USER;
  public tags: string[] = [];
  public type: NatipayMemberTypeEnum | null = NatipayMemberTypeEnum.CLIENT;
  public upadatedAt: Date = new Date();
  public userId: string = '';

  constructor(data?: Partial<NatipayMemberEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
