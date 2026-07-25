import { IMercadoPagoQRItem, IMercadoPagoQRItemCamelCase } from '../../interfaces/qr/i-mercado-pago-qr-item';

export class MercadoPagoQRItemEntity implements IMercadoPagoQRItem {
  public currency_id: string = '';
  public description: string = '';
  public id: number = 0;
  public picture_url: string = '';
  public quantity: number = 0;
  public title: string = '';
  public unit_price: number = 0;

  constructor(data?: Partial<MercadoPagoQRItemEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export class MercadoPagoQRItemEntityCamelCase implements IMercadoPagoQRItemCamelCase {
  public currencyId: string = '';
  public description: string = '';
  public id: number = 0;
  public pictureUrl: string = '';
  public quantity: number = 0;
  public title: string = '';
  public unitPrice: number = 0;

  constructor(data?: Partial<MercadoPagoQRItemEntityCamelCase>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
