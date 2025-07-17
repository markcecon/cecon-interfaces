import { ENatipaySaleChannel } from '../..';
import { EAmountMode } from '../../../general';
import { EOperationType } from '../../../transaction/enums';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';

export interface IFeeSaleChannel {
  amount: number;
  amountMode: EAmountMode;
  feePayer: EFeePayer;
  id: string;
  operationType: EOperationType;
  saleChannel: ENatipaySaleChannel;
}
