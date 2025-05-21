import { EPayioCatalogStatus, EPayioCatalogTemplate } from '../enums';
import { IPayioCatalogCategory, IPayioCatalogItem, IPayioCatalogPizza } from '../interfaces';
import { PayioCatalogPizzaEntity } from './catalog-pizza.entity';

export class PayioCatalogCategoryEntity implements IPayioCatalogCategory {
  public id: string = '';
  public index: number = 0;
  public items?: IPayioCatalogItem[] = [];
  public name: string = '';
  public pizza?: IPayioCatalogPizza = new PayioCatalogPizzaEntity();
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public template: EPayioCatalogTemplate = EPayioCatalogTemplate.DEFAULT;

  constructor(data?: Partial<PayioCatalogCategoryEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
