/**
 * Resposta da criação do pagamento
 */
export interface IFirebankPaymentResponse {
  generateTime: string;
  paymentLink: string;
  pixCode: string;
  pixQrCode: string;
  status: string;
  transactionId: string;
}
