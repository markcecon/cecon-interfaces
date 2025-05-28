import { EPayioCatalogStatus, EPayioCategoryTemplate } from '../enums';
import { IPayioCatalogItem } from './i-catalog-item';
import { IPayioCatalogPizza } from './i-catalog-pizza';

export interface IPayioCatalogCategory {
  // #region Properties (13)

  id: string;
  name: string;
  status: EPayioCatalogStatus;
  sequence: number;
  index: number;
  template: EPayioCategoryTemplate;
  pizza?: IPayioCatalogPizza;
  items?: IPayioCatalogItem[];
  tags: string[];

  // #endregion Properties (13)
}
