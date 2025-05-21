import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogPizzaTopping } from '../interfaces';

export class PayioCatalogPizzaToppingEntity implements IPayioCatalogPizzaTopping {
  public description: string = '';
  public dietaryRestrictions: string[] = [];
  public externalCode: string = '';
  public id: string = '';
  public image: string = '';
  public imagePath: string = '';
  public index: number = 0;
  public name: string = '';
  public prices: { [key: string]: { value: number } } = {};
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;

  constructor(data?: Partial<PayioCatalogPizzaToppingEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
