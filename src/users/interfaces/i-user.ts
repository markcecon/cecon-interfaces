import { NatipayMemberTypeEnum } from '../../natipay';
import { PayioUserTypeEnum } from '../enums';

export interface IUser {
  // #region Properties (15)

  accessCount: number;
  active: boolean;
  createdAt: Date;
  email: string | null;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  lastAccessAt: Date;
  name: string;
  phoneNumber: string;
  tags: string[];
  type: PayioUserTypeEnum | NatipayMemberTypeEnum;
  updatedAt: Date;

  // #endregion Properties (15)
}
