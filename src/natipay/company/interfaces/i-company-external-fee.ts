import { EAmountMode } from '../../../transaction';

export interface INatipayCompanyExternalFee {
  amount: number;
  amountMode: EAmountMode;
  name: string;
}
