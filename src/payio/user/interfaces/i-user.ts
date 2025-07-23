import { IUser } from '../../../users';
import { IPayioUserReport } from './i-user-report';
import { IPayioUserSession } from './i-user-sessions';

export interface IPayioUser extends IUser {
  accessCode: string | null;
  accessCodeExpiration: Date | null;
  code: string | null; // Caso seja um usuário do tipo TESTER, esse campo será preenchido quando solicitar o código de verificação do telefone
  sessions: IPayioUserSession[];
  faceId: string | null;
  faceImage64: string | null;
  faceLastUpdate: Date | null;
  reports: IPayioUserReport[];
}
