import { EPayioCatalogStatus, EPayioEngines, EPayioImportStatus } from "../enums";
import { IPayioCatalogOption } from "./i-catalog-option";

export interface IPayioCatalogOptionGroup {
  autoImportStatus: EPayioImportStatus;
  catalogId: string;
  categoryId: string;
  createdAt: Date;
  engine: EPayioEngines;
  externalReference: string | null;
  id: string;
  index: number;
  itemId: string;
  max: number;
  min: number;
  name: string;
  options: IPayioCatalogOption[];
  sequence: number;
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
