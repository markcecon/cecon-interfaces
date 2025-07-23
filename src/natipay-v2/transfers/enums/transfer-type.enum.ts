export enum ETransferType {
  // Internal Transfers
  INTERNAL = 'INTERNAL', // Same bank
  INTERNAL_SCHEDULED = 'INTERNAL_SCHEDULED',

  // External Transfers
  TED = 'TED', // Same day
  DOC = 'DOC', // Next business day
  PIX = 'PIX', // Instant
  PIX_SCHEDULED = 'PIX_SCHEDULED',

  // International
  SWIFT = 'SWIFT',
  SEPA = 'SEPA',

  // Investment
  INVESTMENT_TRANSFER = 'INVESTMENT_TRANSFER',

  // Special
  URGENT = 'URGENT',
  STANDARD = 'STANDARD',
}
