import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogOption } from './i-catalog-option';

export interface IPayioCatalogOptionGroup {
  createdAt: Date;
  id: string;
  ifoodId: string | null;
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
