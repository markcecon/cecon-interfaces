import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogOptionGroup } from '../interfaces';
import { PayioCatalogOptionEntity } from './catalog-option.entity';

export class PayioCatalogOptionGroupEntity implements IPayioCatalogOptionGroup {
  public id: string = '';
  public index: number = 0;
  public max: number = 0;
  public min: number = 0;
  public name: string = '';
  public options: PayioCatalogOptionEntity[] = [];
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];

  constructor(data?: Partial<PayioCatalogOptionGroupEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
