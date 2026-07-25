import { EFrom } from '../../general';
import { ENatipaySaleChannel } from '../../natipay';
import { IFee } from '../interfaces';

export class FeeEntity implements IFee {
  public type: EFrom | ENatipaySaleChannel = EFrom.PAYIO;
  public value: number = 0;

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
