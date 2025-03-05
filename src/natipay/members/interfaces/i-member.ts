import { NatipayMemberRulesEnum } from '../enums/member-rules.enum';
import { NatipayMemberTypeEnum } from '../enums/member-type.enum';

export interface INatipayMember {
  // #region Properties (9)
  active: boolean;
  createdAt: Date;
  upadatedAt: Date;
  id: string;
  companyName: string;
  containerName: string;
  email: string | null;
  name: string;
  internationalCode: string;
  phoneNumber: string;
  imageUrl: string | null;
  rule: NatipayMemberRulesEnum;
  type: NatipayMemberTypeEnum | null;
  tags: string[];
  userId: string;

  // #endregion Properties (9)
}
