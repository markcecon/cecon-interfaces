import { EPayioCatalogStatus } from "../enums";
import { IPayioCatalogOptionGroup } from "./i-catalog-option-group";
import { IPayioCatalogShift } from "./i-catalog-shift";

export interface IPayioCatalogItem {
  contextModifiers: string[];
  createdAt: Date;
  customizationModifiers: string[];
  description: string;
  dietaryRestrictions: string[];
  externalCode: string;
  hasOptionGroups: boolean;
  id: string;
  ifoodId: string | null;
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
  tags: string[];
  updatedAt: Date;
}
