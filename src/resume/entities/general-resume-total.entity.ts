import { IGeneralResumeTotal } from '../interfaces';

export class GeneralResumeTotalEntity implements IGeneralResumeTotal {
  public amount: number = 0;
  public count: number = 0;
  public averageAmount: number = 0;

  constructor(data?: Partial<GeneralResumeTotalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
