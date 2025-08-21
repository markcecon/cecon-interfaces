import { EPayioUserType } from "../enums/user-type.enum";

export interface IPayioJwtPayloadUser {
  email: string | null;
  id: string;
  internationalCode: string;
  isAdmin: boolean;
  name: string;
  phoneNumber: string;
  type: EPayioUserType | null;
}
