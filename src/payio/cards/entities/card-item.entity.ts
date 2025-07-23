import { IPayioCardItem } from '../interfaces';

export class PayioCardItemEntity implements IPayioCardItem {
  public externalCode: string = '';
  public name: string = '';

  constructor(data?: Partial<PayioCardItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
