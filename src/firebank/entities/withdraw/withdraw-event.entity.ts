import { EFirebankWithdrawEvent, EFirebankWithdrawStatus } from '../../enums';
import { IFirebankWithdrawEvent, IFirebankWithdrawEventData } from '../../interfaces';

export class FirebankWithdrawEventDataEntity implements IFirebankWithdrawEventData {
  public amount: number = 0;
  public chargeId: string = '';
  public endToEndId: string = '';
  public paidAmount: number = 0;
  public paidAt: Date = new Date();
  public payer: { name: string; document: string } = { name: '', document: '' };
  public status: EFirebankWithdrawStatus = EFirebankWithdrawStatus.PROCESSING;

  constructor(data?: Partial<FirebankWithdrawEventDataEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class FirebankWithdrawEventEntity implements IFirebankWithdrawEvent {
  public chargeId: string = '';
  public data: IFirebankWithdrawEventData = new FirebankWithdrawEventDataEntity();
  public event: EFirebankWithdrawEvent = EFirebankWithdrawEvent.CHARGE_PAID;
  public externalId: string = '';
  public timestamp: Date = new Date();

  constructor(data?: Partial<FirebankWithdrawEventEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
