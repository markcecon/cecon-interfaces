import { EPayioScheduleSkill } from '../enums';
import { IPayioScheduleProduct } from '../interfaces/i-schedule-product';

export class PayioScheduleProductEntity implements IPayioScheduleProduct {
  public code: string = '';
  public description: string = '';
  public exceededWeightMessageText: string | null = '';
  public exceededWeightPrice: number = 0;
  public helpYourSelf: boolean = false;
  public id: string = '';
  public price: number = 0;
  public skill: EPayioScheduleSkill = EPayioScheduleSkill.PRODUCT_BY_WEIGHT;
  public unit: string = 'KG';
  public weightLimitMessage: number = 0;
  public weightLimitPrice: number = 0;

  constructor(data?: Partial<PayioScheduleProductEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
