import { EPayioCatalogStatus, EPayioImportStatus } from '../enums';
import { IPayioCatalogOption } from './i-catalog-option';

export interface IPayioCatalogOptionGroup {
  autoImportStatus: EPayioImportStatus;
  createdAt: Date;
  id: string;
  ifoodId: string | null;
  catalogId: string;
  categoryId: string;
  itemId: string;
  index: number;
  max: number;
  min: number;
  name: string;
  options: IPayioCatalogOption[];
  sequence: number;
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
