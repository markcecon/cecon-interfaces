import { IFeeFrom, IFeeSaleChannel, INatipayFee } from '../interfaces';

export class NatipayFeeEntity implements INatipayFee {
  public from: IFeeFrom[] = [];
  public saleChannel: IFeeSaleChannel[] = [];

  constructor(data?: Partial<NatipayFeeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
