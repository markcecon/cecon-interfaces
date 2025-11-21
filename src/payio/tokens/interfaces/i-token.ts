export interface IPayioToken {
  appId: string;
  companyId: string | null;

  // Data de criação do token
  createdAt: Date;

  // ID do dispositivo (se aplicável)
  deviceId: string | null;

  // Data de expiração do token
  expiresAt: Date;

  // Identificador único do token (JTI - JWT ID)
  id: string;

  // IP de onde o token foi emitido (opcional)
  ipAddress: string | null;

  // Indica se o token foi revogado
  isRevoked: boolean;

  // O refresh token em si
  refreshToken: string;
  revokedAt: Date | null;
  sandbox: boolean;
  updatedAt: Date;

  // Informação do dispositivo ou navegador usado
  userAgent: string | null;

  // ID do usuário associado ao token
  userId: string;
}
