import { IPayioCardApplicableItem } from '../interfaces';

export class PayioCardApplicableItemEntity implements IPayioCardApplicableItem {
  public externalCode: string = '';
  public name: string = '';

  constructor(data?: Partial<PayioCardApplicableItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
