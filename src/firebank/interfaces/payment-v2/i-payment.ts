import { IFirebankPaymentCounterPart } from './i-payment-counter-part';
import { IFirebankPaymentMetadata } from './i-payment-metadata';

/**
 * Resposta da criação do pagamento
 */
export interface IFirebankPaymentV2 {
  counterpart: IFirebankPaymentCounterPart;
  endToEndId: string;
  errorCode: string;
  errorMessage: string;
  event: 'CashIn' | 'CashOut' | 'Refund' | 'Chargeback';
  externalId: string;
  feeAmount: number;
  finalAmount: number;
  metadata: IFirebankPaymentMetadata;
  movementType: 'CREDIT' | string;
  originalAmount: number;
  pixKey: string;
  processingDate: Date;
  status: 'CONFIRMED' | string;
  transactionId: string;
  transactionType: 'PIX' | string;
}
