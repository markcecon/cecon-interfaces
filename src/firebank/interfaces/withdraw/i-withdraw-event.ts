import { EFirebankWithdrawEvent, EFirebankWithdrawStatus } from '../../enums';

export interface IFirebankWithdrawEvent {
  chargeId: string;
  data: IFirebankWithdrawEventData;
  event: EFirebankWithdrawEvent;
  externalId: string;
  timestamp: Date;
}
export interface IFirebankWithdrawEventData {
  chargeId: string;
  status: EFirebankWithdrawStatus;
  amount: number;
  paidAmount: number;
  paidAt: Date;
  endToEndId: string;
  payer: {
    name: string;
    document: string;
  };
}
