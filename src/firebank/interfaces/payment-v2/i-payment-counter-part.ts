import { IFirebankPaymentCounterPartBank } from './i-payment-counter-part-bank';

/**
 * Resposta da criação do pagamento
 */
export interface IFirebankPaymentCounterPart {
  bank: IFirebankPaymentCounterPartBank;
  document: string;
  name: string;
}
