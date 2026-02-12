import { EOperationType } from '../enums';
import { ITransactionResumeData } from '../interfaces/i-resume-data';

export class TransactionResumeDataEntity implements ITransactionResumeData {
  public amount: number = 0;
  public date: Date = new Date();
  public operationType: EOperationType = EOperationType.NATIPAY;
  public period: string = '';
  public reference: string = '';

  constructor(data?: Partial<TransactionResumeDataEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
