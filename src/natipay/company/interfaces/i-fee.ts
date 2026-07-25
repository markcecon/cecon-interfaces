import { IFeeSaleChannel } from './i-fee-channel';
import { IFeeFrom } from './i-fee-from';

export interface INatipayFee {
  from: IFeeFrom[];
  saleChannel: IFeeSaleChannel[];
}
