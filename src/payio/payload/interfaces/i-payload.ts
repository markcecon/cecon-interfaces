import { IPayioJwtPayloadActivation } from '../..';
import { EPayioJwtTokenType } from '../enums';
import { IPayioJwtPayloadApp } from './i-payload-app';
import { IPayioJwtPayloadDevice } from './i-payload-device';
import { IPayioJwtPayloadInfo } from './i-payload-info';
import { IPayioJwtPayloadMachine } from './i-payload-machine';
import { IPayioJwtPayloadUser } from './i-payload-user';

export interface IPayioJwtPayload {
  app: IPayioJwtPayloadApp | null;

  /**
   * (Audiência): Identifica os destinatários pretendidos do JWT (sua aplicação).
   * Pode ser uma string única ou um array de strings para múltiplas audiências.
   */
  aud: string | string[];
  activation?: IPayioJwtPayloadActivation | null;
  /** @deprecated use machine instead */
  device: IPayioJwtPayloadDevice | null;
  distributorId: string | null;

  /**
   * (Expiração): Timestamp de quando o JWT expira
   */
  exp?: number;

  /**
   * (Emitido em): Timestamp de quando o JWT foi emitido
   */
  iat: number;
  info: IPayioJwtPayloadInfo | null;

  /**
   * (Emissor): Identifica quem emitiu o JWT (o domínio da sua aplicação).
   */
  iss: string;
  jti: string;
  machine: IPayioJwtPayloadMachine | null;
  permissions: string[];
  sub: string;
  type: EPayioJwtTokenType | null;
  user: IPayioJwtPayloadUser | null;
}
