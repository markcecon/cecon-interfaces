import { EPayioCatalogStatus, EPayioEngines } from '../enums';
import { IPayioCatalogCategory } from './i-catalog-category';

export interface IPayioCatalog {
  active: boolean;
  categories: IPayioCatalogCategory[];
  companyId: string;
  containerId: string | null;
  createdAt: Date;
  engine: EPayioEngines;
  id: string;
  name: string;
  sandbox: boolean;
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
