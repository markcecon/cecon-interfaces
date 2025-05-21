import { EPayioUserType } from '../enums/user-type.enum';

export interface IPayioJwtPayloadUser {
  // #region Properties (3)

  phoneNumber: string;
  internationalCode: string;
  email: string | null;
  id: string;
  name: string;
  type: EPayioUserType | null;
  // #endregion Properties (3)
}
