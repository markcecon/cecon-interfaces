import { EPayioTransactionType } from '../enums';
import { IPayioCardTransaction } from '../interfaces';

export class PayioCardTransactionEntity implements IPayioCardTransaction {
  public active: boolean = true;
  public amount: number = 0;
  public cardId: string = '';
  public reference: string = '';
  public createdAt: Date = new Date();
  public finalCompanyId: string = '';
  public finalContainerId: string | null = null;
  public id: string = '';
  public metadata?: string | null | undefined;
  public sandbox: boolean = false;
  public type: EPayioTransactionType = EPayioTransactionType.DISCOUNT;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCardTransactionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
