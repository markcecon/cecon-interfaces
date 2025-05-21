import { IPayioCatalogShift } from '../interfaces';

export class PayioCatalogShiftEntity implements IPayioCatalogShift {
  public endTime: string = '23:59';
  public friday: boolean = true;
  public monday: boolean = true;
  public saturday: boolean = true;
  public startTime: string = '00:00';
  public sunday: boolean = true;
  public thursday: boolean = true;
  public tuesday: boolean = true;
  public wednesday: boolean = true;

  constructor(data?: Partial<PayioCatalogShiftEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
