export enum EPayioActivationKeyStatus {
  AVAILABLE = 'AVAILABLE', // Disponível para ativação
  PENDING = 'PENDING', // Pendente (pode estar sendo processada)
  ACTIVE = 'ACTIVE', // Ativada e funcionando
  EXPIRED = 'EXPIRED', // Expirada por tempo
  REVOKED = 'REVOKED', // Revogada manualmente
  NONE = 'NONE', // Status nulo (para casos especiais)
}
