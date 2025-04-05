import { NatipayMemberTypeEnum } from '../../natipay';
import { PayioUserTypeEnum } from '../enums';

export interface IUser {
  // #region Properties (15)

  accessCount: number;
  active: boolean;
  createdAt: Date;
  currentCompanyId: string | null;
  currentCompanyName: string | null;
  email: string | null;
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  lastAccessAt: Date;
  name: string;
  code: string | null; // Caso seja um usuário do tipo TESTER, esse campo será preenchido quando solicitar o código de verificação do telefone
  phoneNumber: string;
  tags: string[];
  type: PayioUserTypeEnum | NatipayMemberTypeEnum;
  updatedAt: Date;

  // #endregion Properties (15)
}
