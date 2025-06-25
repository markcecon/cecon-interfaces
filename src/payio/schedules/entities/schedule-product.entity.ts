import { EPayioScheduleSkill } from '../enums';
import { IPayioScheduleProduct } from '../interfaces/i-schedule-product';

export class PayioScheduleProductEntity implements IPayioScheduleProduct {
  public code: string = '';
  public description: string = '';
  public price: number = 0;
  public skill: EPayioScheduleSkill = EPayioScheduleSkill.NORMAL;
  public unit: string = 'KG';

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
