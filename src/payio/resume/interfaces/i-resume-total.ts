import { IGeneralPayioResumeTotal } from './i-resume-general';

export interface IPayioResumeChild {
  type: string | null;
  totals: IGeneralPayioResumeTotal; // valor total adiquirido do resume
  id: string; // ano/mês/dia/hora em que ocorreu o resume.
}
