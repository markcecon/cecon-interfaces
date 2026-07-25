import { NatipayMemberRulesEnum } from '../../members';

export interface INatipayJwtPayloadUser {
  // #region Properties (3)

  phoneNumber: string;
  internationalCode: string;
  email: string | null;
  id: string;
  name: string;
  memberRule: NatipayMemberRulesEnum | null;
  // #endregion Properties (3)
}
