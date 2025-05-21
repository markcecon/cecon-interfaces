import { IPayioResumeChild } from '../interfaces';
import { GeneralPayioResumeTotalEntity } from './general-resume-total.entity';

export class PayioResumeChildEntity implements IPayioResumeChild {
  public id: string = '';
  public totals: GeneralPayioResumeTotalEntity = new GeneralPayioResumeTotalEntity();
  public type: string | null = null;

  constructor(data?: Partial<PayioResumeChildEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
