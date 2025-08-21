export class OrderPaymentPixEntity {
  public imageBase64: string = '';
  public paymentLink: string = '';
  public pixKey: string = '';
  public urlQrImage: string = '';

  constructor(data?: Partial<OrderPaymentPixEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
