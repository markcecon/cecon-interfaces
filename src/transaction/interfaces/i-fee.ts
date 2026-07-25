import { EFrom } from '../../general';
import { ENatipaySaleChannel } from '../../natipay';

export interface IFee {
  type: EFrom | ENatipaySaleChannel;
  value: number;
}
