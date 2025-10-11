import { EFirebankWithdrawStatus } from '../../enums';
import { IFirebankWithdraw, IFirebankWithdrawRecipient } from '../../interfaces/withdraw/i-withdraw';

export class FirebankWithdrawRecipientEntity implements IFirebankWithdrawRecipient {
  public pixKey: string = '';
  public name: string = '';
}

export class FirebankWithdrawEntity implements IFirebankWithdraw {
  public transferId: string = '';
  public externalId: string = '';
  public status: EFirebankWithdrawStatus = EFirebankWithdrawStatus.PROCESSING;
  public amount: number = 0;
  public recipient: FirebankWithdrawRecipientEntity = new FirebankWithdrawRecipientEntity();
  public created_at: string = '';
  constructor(data?: Partial<FirebankWithdrawEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
