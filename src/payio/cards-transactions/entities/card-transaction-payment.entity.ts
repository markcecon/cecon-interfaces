import { IPayioCardTransactionPayment } from '../interfaces';

export class PayioCardTransactionPaymentEntity implements IPayioCardTransactionPayment {
  public amount: number = 0;
  public createdAt: Date = new Date();
  public id: string = '';
  public metadata?: string | null | undefined = null;
  public pixKey: string = '';
  public pixProvider: string = '';
  public status: string = '';
  public transactionId: string = '';
  public type: string = '';
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCardTransactionPaymentEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
