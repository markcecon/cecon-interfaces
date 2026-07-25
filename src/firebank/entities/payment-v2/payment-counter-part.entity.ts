/**
 * Interface para o contato do pagador
 */
import { IFirebankPaymentCounterPart, IFirebankPaymentCounterPartBank } from '../../interfaces/payment-v2';
import { FirebankPaymentCounterPartBankEntity } from './payment-counter-part-bank.entity';

/**
 * Interface para o endereço do pagador
 */
export class FirebankPaymentCounterPartEntity implements IFirebankPaymentCounterPart {
  public bank: FirebankPaymentCounterPartBankEntity = new FirebankPaymentCounterPartBankEntity();
  public document: string = '';
  public name: string = '';

  constructor(data?: Partial<IFirebankPaymentCounterPartBank | null>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
