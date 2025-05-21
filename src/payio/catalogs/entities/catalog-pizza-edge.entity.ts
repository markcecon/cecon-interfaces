import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogPizzaEdge } from '../interfaces';

export class PayioCatalogPizzaEdgeEntity implements IPayioCatalogPizzaEdge {
  public id: string = '';
  public index: number = 0;
  public name: string = '';
  public price: { value: number } = { value: 0 };
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;

  constructor(data?: Partial<PayioCatalogPizzaEdgeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
