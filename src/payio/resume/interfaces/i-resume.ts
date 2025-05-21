import { EResumeIntervalType } from '../enums/interval-type.enum';
import { IGeneralPayioResumeTotal } from './i-resume-general';
import { IPayioResumeChild } from './i-resume-total';

export interface IPayioResume {
  child: IPayioResumeChild[];
  childByType: IPayioResumeChild[];
  createdAt: Date;
  id: string;
  info: {
    companyId: string | null;
    containerId: string | null;
    deviceId: string | null;
    appId: string | null;
    appSlug: string | null;
  };
  interval: EResumeIntervalType;
  totals: IGeneralPayioResumeTotal;
  updatedAt: Date;
}
