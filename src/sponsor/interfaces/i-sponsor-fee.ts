import { EOperationType } from '../..';
import { EDiscountType } from '../../general';

export interface ISponsorFee {
  type: EDiscountType;
  amount: number;
  method: EOperationType;
}
