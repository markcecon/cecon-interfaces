import { IPayioResumeTotals } from '../interfaces';

export class PayioResumeTotalEntity implements IPayioResumeTotals {
  public amount: number = 0;
  public averageAmount: number = 0;
  public count: number = 0;
  public type: string = 'DEFAULT';

  constructor(data?: Partial<PayioResumeTotalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
