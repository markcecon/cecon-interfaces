import { INatipayCardItem } from '../interfaces';

export class NatipayCardItemEntity implements INatipayCardItem {
  public externalCode: string = '';
  public name: string = '';

  constructor(data?: Partial<NatipayCardItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
