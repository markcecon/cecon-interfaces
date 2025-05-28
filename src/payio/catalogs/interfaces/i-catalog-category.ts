import { EPayioCatalogStatus, EPayioCategoryTemplate } from '../enums';
import { IPayioCatalogItem } from './i-catalog-item';
import { IPayioCatalogPizza } from './i-catalog-pizza';

export interface IPayioCatalogCategory {
  createdAt: Date;
  id: string;
  ifoodId: string | null;
  index: number;
  items?: IPayioCatalogItem[];
  name: string;
  pizza?: IPayioCatalogPizza;
  sequence: number;
  status: EPayioCatalogStatus;
  tags: string[];
  template: EPayioCategoryTemplate;
  updatedAt: Date;
}
