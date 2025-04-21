import { INatipayOrderItem } from '../interfaces';

export class NatipayOrderItemEntity implements INatipayOrderItem {
  public externalCode: string = '';
  public id: string = '';
  public index: number = 0;
  public name: string = '';
  public observations: string = '';
  public picture: string = '';
  public price: number = 0;
  public productId: number = 0;
  public quantity: number = 0;
  public totalPrice: number = 0;
  public unit: string = '';
  public unitPrice: number = 0;
  public weight: number = 0;

  constructor(data?: Partial<NatipayOrderItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
