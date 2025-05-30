import { EPayioCatalogStatus, EPayioCategoryTemplate, EPayioImportStatus } from '../enums';
import { IPayioCatalogItem } from './i-catalog-item';
import { IPayioCatalogPizza } from './i-catalog-pizza';

export interface IPayioCatalogCategory {
  autoImportStatus: EPayioImportStatus;
  createdAt: Date;
  id: string;
  ifoodId: string | null;
  catalogId: string;
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
