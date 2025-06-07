import { INatipayJwtPayloadApp } from './i-payload-app';
import { INatipayJwtPayloadDevice } from './i-payload-device';
import { INatipayJwtPayloadInfo } from './i-payload-info';
import { INatipayJwtPayloadUser } from './i-payload-user';

export interface INatipayJwtPayload {
  // #region Properties (15)

  app: INatipayJwtPayloadApp | null;
  /**
   * (Audiência): Identifica os destinatários pretendidos do JWT (sua aplicação).
   * Pode ser uma string única ou um array de strings para múltiplas audiências.
   */
  aud: string | string[];
  device: INatipayJwtPayloadDevice | null;
  /**
   * (Expiração): Timestamp de quando o JWT expira
   */
  exp?: number;
  /**
   * (Emitido em): Timestamp de quando o JWT foi emitido
   */
  iat: number;
  info: INatipayJwtPayloadInfo | null;
  /**
   * (Emissor): Identifica quem emitiu o JWT (o domínio da sua aplicação).
   */
  iss: string;
  jti: string;
  sub: string;
  type: string | null;
  user: INatipayJwtPayloadUser | null;

  // #endregion Properties (15)
}
