import { EPayioCatalogStatus, EPayioCategoryTemplate, EPayioEngines, EPayioImportStatus } from "../enums";
import { IPayioCatalogItem } from "./i-catalog-item";
import { IPayioCatalogPizza } from "./i-catalog-pizza";

export interface IPayioCatalogCategory {
  autoImportStatus: EPayioImportStatus;
  catalogId: string;
  createdAt: Date;
  engine: EPayioEngines;
  externalReference: string | null;
  id: string;
  index: number;
  items?: IPayioCatalogItem[];
  name: string;
  pizza?: IPayioCatalogPizza;
  sequence: number;
  status: EPayioCatalogStatus;
  tags: string[];
  template: EPayioCategoryTemplate;
  updatedAt: Date;
}
