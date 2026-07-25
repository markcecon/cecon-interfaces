import { EResumeIntervalType } from '../enums';
import { IPayioResume } from '../interfaces';
import { PayioResumeItemEntity } from './resume-item.entity';
import { PayioResumeTotalEntity } from './resume-totals.entity';

export class PayioResumeEntity implements IPayioResume {
  public createdAt: Date = new Date();
  public id: string = '';
  public info: {
    companyId: string;
    companyName: string;
    containerId: string | null;
  } = {
    companyId: '',
    companyName: '',
    containerId: null,
  };
  public interval: EResumeIntervalType = EResumeIntervalType.YEAR;
  public items: PayioResumeItemEntity[] = [];
  public resumeVersion: string = '1.0.0';
  public totals: PayioResumeTotalEntity[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioResumeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
