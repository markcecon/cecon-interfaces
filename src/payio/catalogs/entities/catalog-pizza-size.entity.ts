import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogPizzaSize } from '../interfaces';

export class PayioCatalogPizzaSizeEntity implements IPayioCatalogPizzaSize {
  public acceptedFractions: number[] = [];
  public externalCode: string = '';
  public id: string = '';
  public index: number = 0;
  public name: string = '';
  public sequence: number = 0;
  public slices: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;

  constructor(data?: Partial<PayioCatalogPizzaSizeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
