import { EAmountMode, EFrom } from '../../../general';
import { EOperationType } from '../../../transaction/enums';
import { EFeePayer } from '../../../transaction/enums/fee-payer.enum';

export interface IFeeFrom {
  amount: number;
  amountMode: EAmountMode;
  feePayer: EFeePayer;
  from: EFrom;
  id: string;
  operationType: EOperationType;
}
