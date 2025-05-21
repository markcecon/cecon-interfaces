import { IUser } from '../../../users';
import { IPayioUserReport } from './i-user-report';

export interface IPayioUser extends IUser {
  accessCode: string | null;
  accessCodeExpiration: Date | null;
  code: string | null; // Caso seja um usuário do tipo TESTER, esse campo será preenchido quando solicitar o código de verificação do telefone
  currentCompanyId: string | null;
  currentCompanyName: string | null;
  faceId: string | null;
  faceImage64: string | null;
  faceLastUpdate: Date | null;
  reports: IPayioUserReport[];
}
