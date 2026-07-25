import { EDocType } from "../../../general";
import { IUser } from "../../../users";
import { IPayioUserSession } from "./i-user-sessions";

export interface IPayioUser extends IUser {
  code: string | null; // Caso seja um usuário do tipo TESTER, esse campo será preenchido quando solicitar o código de verificação do telefone
  doc?: string;
  docType?: EDocType;
  password: string | null; // Senha do usuário Payio
  sessions: IPayioUserSession[];
}
