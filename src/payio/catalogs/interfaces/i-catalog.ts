import { EPayioCatalogStatus } from '../enums';
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
  updatedAt: Date;
  status: EPayioCatalogStatus;
  context: 'INDOOR' | 'DEFAULT'[];
  categories?: IPayioCatalogCategory[];

  // #endregion Properties (13)
}
