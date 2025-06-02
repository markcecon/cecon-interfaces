import { EPayioCatalogContext, EPayioCatalogStatus, EPayioEngines } from "../enums";
import { EPayioImportStatus } from "../enums/import-status.enum";
import { IPayioCatalogCategory } from "./i-catalog-category";

export interface IPayioCatalog {
  active: boolean;
  autoImportStatus: EPayioImportStatus;
  categories: IPayioCatalogCategory[];
  companyId: string;
  containerId: string | null;
  context: EPayioCatalogContext[];
  createdAt: Date;
  engine: EPayioEngines;
  externalReference: string | null;
  id: string;
  name: string;
  sandbox: boolean;
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
