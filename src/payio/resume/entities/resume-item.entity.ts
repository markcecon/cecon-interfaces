import { IPayioResumeItem } from '../interfaces';
import { PayioResumeTotalEntity } from './resume-totals.entity';

export class PayioResumeItemEntity implements IPayioResumeItem {
  public id: string = '';
  public totals: PayioResumeTotalEntity = new PayioResumeTotalEntity();
  public type: string = 'DEFAULT';

  constructor(data?: Partial<PayioResumeItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
