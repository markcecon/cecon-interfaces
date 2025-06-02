import { EPayioCatalogContext, EPayioCatalogStatus, EPayioEngines } from "../enums";
import { EPayioImportStatus } from "../enums/import-status.enum";
import { IPayioCatalog } from "../interfaces";
import { PayioCatalogCategoryEntity } from "./catalog-category.entity";

export class PayioCatalogEntity implements IPayioCatalog {
  public active: boolean = true;
  public autoImportStatus: EPayioImportStatus = EPayioImportStatus.DISABLED;
  public categories: PayioCatalogCategoryEntity[] = [];
  public companyId: string = '';
  public containerId: string | null = null;
  public context: EPayioCatalogContext[] = [EPayioCatalogContext.DEFAULT];
  public createdAt: Date = new Date();
  public engine: EPayioEngines = EPayioEngines.NONE;
  public externalReference: string | null = null;
  public id: string = '';
  public name: string = '';
  public sandbox: boolean = false;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCatalogEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
