import { EAmountMode } from '../../../general';

export interface INatipayCompanyExternalFee {
  amount: number;
  amountMode: EAmountMode;
  id: string;
  name: string;
}
