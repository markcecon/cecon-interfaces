import { EPayioCatalogContext, EPayioCatalogStatus } from '../enums';
import { IPayioCatalogCategory } from './i-catalog-category';

export interface IPayioCatalog {
  // #region Properties (13)

  active: boolean;
  companyId: string;
  containerId: string | null;
  createdAt: Date;
  id: string;
  name: string;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  status: EPayioCatalogStatus;
  context: EPayioCatalogContext[];
  categories?: IPayioCatalogCategory[];

  // #endregion Properties (13)
}
