import { IFeeDetail } from '../../../transaction';
import { INatipayMercadoPago } from '../interfaces/i-mercado-pago';

export class NatipayMercadoPagoEntity implements INatipayMercadoPago {
  public amountPaid: number = 0;
  public paymentId: string = '';
  public paymentStatus: string = '';
  public preferenceId: string = '';
  public feeDetails: IFeeDetail[] = [];

  constructor(data?: Partial<NatipayMercadoPagoEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
