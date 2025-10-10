import { ITransactionPayer } from '../interfaces/i-payer';

export class TransactionPayerEntity implements ITransactionPayer {
  public account: string | null = null;
  public bank: string | null = null;
  public branch: string | null = null;
  public name: string | null = null;
  public doc: string | null = null;

  constructor(data?: Partial<TransactionPayerEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
