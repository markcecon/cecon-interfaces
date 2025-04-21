import { ENatipaySaleChannel } from '../..';
import { EAmountMode, EOperationType } from '../../../transaction/enums';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';

export interface IFeeSaleChannel {
  amount: number;
  amountMode: EAmountMode;
  operationType: EOperationType;
  saleChannel: ENatipaySaleChannel;
  feePayer: EFeePayer;
}
