import { EFrom } from '../../../general';
import { EAmountMode, EOperationType } from '../../../transaction/enums';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';

export interface IFeeFrom {
  amount: number;
  amountMode: EAmountMode;
  operationType: EOperationType;
  from: EFrom;
  feePayer: EFeePayer;
}
