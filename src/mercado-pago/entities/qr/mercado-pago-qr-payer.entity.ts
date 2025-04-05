import { IMercadoPagoQRPayer } from '../../interfaces/qr/i-mercado-pago-qr-payer';

export class MercadoPagoQRPayerEntity implements IMercadoPagoQRPayer {
  public address: Record<string, unknown> = {};
  public id: number = 0;
  public identification: Record<string, unknown> = {};
  public phone: Record<string, unknown> = {};

  constructor(data?: Partial<MercadoPagoQRPayerEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
