import { IPayioResumeTotals } from './i-resume-totals';

export interface IPayioResumeItem {
  type: string;
  totals: IPayioResumeTotals; // valor total adiquirido do resume
  id: string; // ano/mês/dia/hora em que ocorreu o resume.
}
