export enum EFirebankWithdrawEvent {
  CHARGE_PAID = 'pix.charge.paid', // Cobrança PIX foi paga
  CHARGE_EXPIRED = 'pix.charge.expired', // Cobrança PIX expirou
  TRANSFER_COMPLETED = 'pix.transfer.completed', // Transferência PIX concluída
  TRANSFER_FAILED = 'pix.transfer.failed', // Transferência PIX falhou
}
