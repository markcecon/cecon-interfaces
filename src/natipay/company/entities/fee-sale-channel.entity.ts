import { ENatipaySaleChannel } from '../..';
import { EAmountMode, EOperationType } from '../../../transaction';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';
import { IFeeSaleChannel } from '../interfaces';

export class FeeSaleChannelEntity implements IFeeSaleChannel {
  public amount: number = 0;
  public amountMode: EAmountMode = EAmountMode.PERCENTAGE;
  public feePayer: EFeePayer = EFeePayer.PLATFORM;
  public operationType: EOperationType = EOperationType.NATIPAY;
  public saleChannel: ENatipaySaleChannel = ENatipaySaleChannel.DEFAULT;

  constructor(data?: Partial<FeeSaleChannelEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
