import { EPayioCatalogStatus } from "../enums";
import { IPayioCatalogOption } from "../interfaces/i-catalog-option";

export class PayioCatalogOptionEntity implements IPayioCatalogOption {
  public description: string = '';
  public externalCode: string = '';
  public id: string = '';
  public imagePath: string = '';
  public index: number = 0;
  public name: string = '';
  public price: { value: number } = { value: 0 };
  public productId: string = '';
  public sequence: number = 0;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;

  constructor(data?: Partial<PayioCatalogOptionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
