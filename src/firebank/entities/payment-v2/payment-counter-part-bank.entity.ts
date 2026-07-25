/**
 * Interface para o contato do pagador
 */
import { IFirebankPaymentCounterPartBank } from '../../interfaces/payment-v2';

/**
 * Interface para o endereço do pagador
 */
export class FirebankPaymentCounterPartBankEntity implements IFirebankPaymentCounterPartBank {
  public accountBranch: string = '';
  public accountNumber: string = '';
  public bankCode: string = '';
  public bankISPB: string = '';
  public bankName: string = '';

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
