import { IFeeDetail } from '../interfaces';

export class FeeDetailEntity implements IFeeDetail {
  public amount: number = 0;
  public feePayer: 'collector' | string = '';
  public type: 'mercadopago_fee' | 'plattform_fee' | 'firebank_fee' | string = '';
  public description?: string = '';

  constructor(data?: Partial<FeeDetailEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
