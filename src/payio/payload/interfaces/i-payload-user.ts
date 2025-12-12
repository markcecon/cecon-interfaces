import { EDocType } from '../../..';
import { EPayioUserType } from '../enums/user-type.enum';

export interface IPayioJwtPayloadUser {
  email: string | null;
  id: string;
  internationalCode: string;
  isAdmin: boolean;
  name: string;
  phoneNumber: string;
  doc?: string;
  docType?: EDocType;
  type: EPayioUserType | null;
}
