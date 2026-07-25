export enum EPayioCardStatus {
  ACTIVE = 'ACTIVE',
  REVOKED = 'REVOKED',
  INACTIVE = 'INACTIVE',
  CANCELLED = 'CANCELLED',
  BLOCKED = 'BLOCKED',
  SUSPENDED = 'SUSPENDED',
  LOCKED = 'LOCKED', // Status para cartão que nasce bloqueado, diferente de BLOCKED (fraude ou bloqueio necessário)
}
