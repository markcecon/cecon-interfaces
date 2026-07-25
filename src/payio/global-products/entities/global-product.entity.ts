import { IPayioGlobalProduct } from '../interfaces/i-global-products';

export class PayioGlobalProductEntity implements IPayioGlobalProduct {
  public active: boolean = true;
  public avgPrice: number = 0;
  public brand: string = '';
  public cest: string | null = null;
  public code: string = '';
  public createdAt: Date = new Date();
  public id: string = '';
  public lastPrices: number[] = [];
  public maxPrice: number = 0;
  public minPrice: number = 0;
  public name: string = '';
  public ncm: string | null = null;
  public quantityPackaging: number = 0;
  public tags: string[] = [];
  public thumbnail: string | null = null;
  public unit: string = '';
  public updatedAt: Date = new Date();
  public weight: number = 0;

  constructor(data?: Partial<PayioGlobalProductEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
