/**
 * Interface para o contato do pagador
 */
import { IFirebankPaymentMetadata } from '../../interfaces/payment-v2';

/**
 * Interface para o endereço do pagador
 */
export class FirebankPaymentMetadataEntity implements IFirebankPaymentMetadata {
  public companyId: string = '';
  public containerId: string = '';
  public orderId: string = '';

  constructor(data?: Partial<IFirebankPaymentMetadata | null>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
