import { EPayioCatalogStatus, EPayioEngines, EPayioImportStatus, EPayioMeasure } from '../enums';
import { IPayioCatalogOptionGroup } from './i-catalog-option-group';
import { IPayioCatalogShift } from './i-catalog-shift';

export interface IPayioCatalogItem {
  autoImportStatus: EPayioImportStatus;
  catalogId: string;
  categoryId: string;
  companyId: string;
  containerId: string | null;
  contextModifiers: string[];
  createdAt: Date;
  customizationModifiers: string[];
  description: string;
  dietaryRestrictions: string[];
  engine: EPayioEngines;
  externalCode: string;
  externalReference: string | null;
  hasOptionGroups: boolean;
  id: string;
  imageUrl: string;
  index: number;
  name: string;
  measure: EPayioMeasure;
  productionPlaceId: string;
  optionGroups: IPayioCatalogOptionGroup[];
  price: number;
  productId: string;
  sequence: number;
  serving: string;
  shifts: IPayioCatalogShift[];
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
