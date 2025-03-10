import { NatipayMemberRulesEnum } from '../enums/member-rules.enum';
import { NatipayMemberTypeEnum } from '../enums/member-type.enum';

export interface INatipayMember {
  active: boolean;
  companyId: string;
  companyName: string | null;
  containerId: string;
  containerName: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  rule: NatipayMemberRulesEnum;
  tags: string[];
  type: NatipayMemberTypeEnum | null;
  updatedAt: Date;
  userId: string;
}
