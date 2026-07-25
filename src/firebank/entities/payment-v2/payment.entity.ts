/**
 * Interface para o contato do pagador
 */
import { IFirebankPaymentV2 } from '../../interfaces/payment-v2';
import { FirebankPaymentCounterPartEntity } from './payment-counter-part.entity';
import { FirebankPaymentMetadataEntity } from './payment-metadata.entity';

/**
 * Interface para o endereço do pagador
 */
export class FirebankPaymentV2Entity implements IFirebankPaymentV2 {
  public counterpart: FirebankPaymentCounterPartEntity = new FirebankPaymentCounterPartEntity();
  public endToEndId: string = '';
  public errorCode: string = '';
  public errorMessage: string = '';
  public event: 'CashIn' | 'CashOut' | 'Refund' | 'Chargeback' = 'CashIn';
  public externalId: string = '';
  public feeAmount: number = 0;
  public finalAmount: number = 0;
  public metadata: FirebankPaymentMetadataEntity = new FirebankPaymentMetadataEntity(null);
  public movementType: string = '';
  public originalAmount: number = 0;
  public pixKey: string = '';
  public processingDate: Date = new Date();
  public status: string = '';
  public transactionId: string = '';
  public transactionType: string = '';

  constructor(data?: Partial<IFirebankPaymentV2>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
