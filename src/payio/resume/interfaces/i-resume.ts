import { EResumeIntervalType } from '../enums/interval-type.enum';
import { IPayioResumeItem } from './i-resume-item';
import { IPayioResumeTotals } from './i-resume-totals';

export interface IPayioResume {
  createdAt: Date;
  id: string; // YYYY | YYYYMM | YYYYMMDD
  info: {
    companyId: string;
    companyName: string;
    containerId: string | null;
  };
  interval: EResumeIntervalType;
  items: IPayioResumeItem[];
  resumeVersion: string;
  totals: IPayioResumeTotals[];
  updatedAt: Date;
}
