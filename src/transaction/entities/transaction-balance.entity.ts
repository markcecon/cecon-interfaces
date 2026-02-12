import { ITransactionBalance } from "../interfaces";

export class TransactionBalanceEntity implements ITransactionBalance {
  public after: number = 0;
  public before: number = 0;

  constructor(data?: Partial<TransactionBalanceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
