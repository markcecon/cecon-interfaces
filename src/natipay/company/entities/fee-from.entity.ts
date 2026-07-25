import { EAmountMode, EFrom } from '../../../general';
import { EOperationType } from '../../../transaction';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';
import { IFeeFrom } from '../interfaces';

export class FeeFromEntity implements IFeeFrom {
  public amount: number = -1;
  public amountMode: EAmountMode = EAmountMode.PERCENTAGE;
  public feePayer: EFeePayer = EFeePayer.PLATFORM;
  public from: EFrom = EFrom.DEFAULT;
  public id: string = '';
  public operationType: EOperationType = EOperationType.NATIPAY;

  constructor(data?: Partial<FeeFromEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
