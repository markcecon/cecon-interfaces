import { IGeneralPayioResumeTotal } from '../interfaces';

export class GeneralPayioResumeTotalEntity implements IGeneralPayioResumeTotal {
  public amount: number = 0;
  public count: number = 0;
  public avarageAmount: number = 0;

  constructor(data?: Partial<GeneralPayioResumeTotalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
