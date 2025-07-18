import { IPayioCardData } from '../interfaces';

export class PayioCardDataEntity implements IPayioCardData {
  public cardNumber: string = '';
  public cvv: string = '';
  public maskedCardNumber: string = '';
  public validThru: string = '';

  constructor(data?: Partial<PayioCardDataEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
