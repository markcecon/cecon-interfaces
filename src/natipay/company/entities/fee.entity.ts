import { INatipayFee } from '../interfaces';
import { FeeFromEntity } from './fee-from.entity';
import { FeeSaleChannelEntity } from './fee-sale-channel.entity';
export class FeeEntity implements INatipayFee {
  public from: FeeFromEntity[] = [];
  public saleChannel: FeeSaleChannelEntity[] = [];

  constructor(data?: Partial<FeeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
