import { EPayioCatalogStatus, EPayioCategoryTemplate, EPayioImportStatus } from '../enums';
import { IPayioCatalogCategory, IPayioCatalogItem, IPayioCatalogPizza } from '../interfaces';
import { PayioCatalogPizzaEntity } from './catalog-pizza.entity';

export class PayioCatalogCategoryEntity implements IPayioCatalogCategory {
  public autoImportStatus: EPayioImportStatus = EPayioImportStatus.DISABLED;
  public catalogId: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public ifoodId: string | null = null;
  public index: number = 0;
  public items?: IPayioCatalogItem[] = [];
  public name: string = '';
  public pizza?: IPayioCatalogPizza = new PayioCatalogPizzaEntity();
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];
  public template: EPayioCategoryTemplate = EPayioCategoryTemplate.DEFAULT;
  public updatedAt: Date = new Date();

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
