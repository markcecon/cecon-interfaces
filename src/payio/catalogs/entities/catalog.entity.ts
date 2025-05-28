import { EPayioCatalogContext, EPayioCatalogStatus } from '../enums';
import { IPayioCatalog } from '../interfaces';
import { PayioCatalogCategoryEntity } from './catalog-category.entity';

export class PayioCatalogEntity implements IPayioCatalog {
  public active: boolean = true;
  public categories: PayioCatalogCategoryEntity[] = [];
  public companyId: string = '';
  public containerId: string | null = null;
  public context: EPayioCatalogContext[] = [EPayioCatalogContext.DEFAULT];
  public createdAt: Date = new Date();
  public id: string = '';
  public ifoodId: string | null = null;
  public name: string = '';
  public sandbox: boolean = false;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCatalogEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
