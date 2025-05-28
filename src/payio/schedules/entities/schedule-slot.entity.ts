import { IPayioScheduleSlot } from '../interfaces';

export class PayioScheduleSlotEntity implements IPayioScheduleSlot {
  public catalogId: string = '';
  public productCode: string = '';
  public productId?: string | undefined;
  public time: string = '';

  constructor(data?: Partial<PayioScheduleSlotEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
