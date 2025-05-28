import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogOption } from './i-catalog-option';

export interface IPayioCatalogOptionGroup {
  id: string;
  index: number;
  max: number;
  min: number;
  name: string;
  options: IPayioCatalogOption[];
  sequence: number;
  status: EPayioCatalogStatus;
  tags: string[];
}
