import { EPayioCatalogStatus, EPayioCatalogTemplate } from '../enums';
import { IPayioCatalogItem } from './i-catalog-item';
import { IPayioCatalogPizza } from './i-catalog-pizza';

export interface IPayioCatalogCategory {
  // #region Properties (13)

  id: string;
  name: string;
  status: EPayioCatalogStatus;
  sequence: number;
  index: number;
  template: EPayioCatalogTemplate;
  pizza?: IPayioCatalogPizza;
  items?: IPayioCatalogItem[];

  // #endregion Properties (13)
}
