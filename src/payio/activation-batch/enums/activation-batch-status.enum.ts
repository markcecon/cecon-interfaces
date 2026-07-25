export enum EPayioActivationBatchStatus {
  PROCESSING = 'PROCESSING', // Lote está sendo processado
  COMPLETED = 'COMPLETED', // Todas as licenças foram geradas
  ERROR = 'ERROR', // Erro ao gerar licenças
  CANCELLING = 'CANCELLING', // Lote está sendo cancelado
  CANCELLED = 'CANCELLED', // Lote cancelado manualmente
}
