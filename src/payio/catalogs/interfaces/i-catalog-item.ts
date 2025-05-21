import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogOptionGroup } from './i-catalog-option-group';
import { IPayioCatalogShift } from './i-catalog-shift';

export interface IPayioCatalogItem {
  contextModifiers: string[];
  customizationModifiers: string[];
  description: string;
  dietaryRestrictions: string[];
  externalCode: string;
  hasOptionGroups: boolean;
  id: string;
  imagePath: string;
  index: number;
  name: string;
  optionGroups: IPayioCatalogOptionGroup[];
  price: {
    value: number;
    originalValue: number;
  };
  productId: string;
  sequence: number;
  serving: string;
  shifts: IPayioCatalogShift[];
  status: EPayioCatalogStatus;
}
