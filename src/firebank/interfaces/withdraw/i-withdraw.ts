import { EFirebankWithdrawStatus } from '../../enums';

export interface IFirebankWithdrawRecipient {
  pixKey: string;
  name: string;
}

export interface IFirebankWithdraw {
  transferId: string;
  externalId: string;
  status: EFirebankWithdrawStatus;
  amount: number;
  recipient: IFirebankWithdrawRecipient;
  created_at: string;
}
