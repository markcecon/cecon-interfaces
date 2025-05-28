import { EPayioCatalogStatus } from "../enums";
import { IPayioCatalogItem } from "../interfaces";
import { PayioCatalogOptionGroupEntity } from "./catalog-option-group.entity";
import { PayioCatalogShiftEntity } from "./catalog-shift.entity";

export class PayioCatalogItemEntity implements IPayioCatalogItem {
  public contextModifiers: string[] = [];
  public createdAt: Date = new Date();
  public customizationModifiers: string[] = [];
  public description: string = '';
  public dietaryRestrictions: string[] = [];
  public externalCode: string = '';
  public hasOptionGroups: boolean = false;
  public id: string = '';
  public ifoodId: string | null = null;
  public imagePath: string = '';
  public index: number = 0;
  public name: string = '';
  public optionGroups: PayioCatalogOptionGroupEntity[] = [];
  public price: { value: number; originalValue: number } = { value: 0, originalValue: 0 };
  public productId: string = '';
  public sequence: number = 0;
  public serving: string = '';
  public shifts: PayioCatalogShiftEntity[] = [];
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCatalogItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
