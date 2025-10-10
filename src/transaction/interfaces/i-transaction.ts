import { EFrom, IInfo } from '../../general';
import { ENatipaySaleChannel } from '../../natipay/orders/enums';
import { EFeePayer, EOperationType, EReleaseStatus, ETransactionProvider, ETransactionStatus } from '../enums';
import { ITransactionBalance } from './i-balance';
import { IFeeDetail } from './i-fee-detail';
import { ITransactionPayer } from './i-payer';
import { ITransactionTotal } from './i-total';

export interface ITransaction {
  balance: ITransactionBalance | null;
  createdAt: Date;
  data: string; // Raw da transaction
  description: string;
  externalOrderReference: string;
  feeDetails: IFeeDetail[];

  /**
   * @description Define quem paga a taxa (fee) da transação.
   *
   * - MERCHANT: A taxa é paga pelo lojista.
   * - PLATFORM: A taxa é paga pela plataforma.
   */
  feePayer: EFeePayer;
  from: EFrom;
  id: string;
  moneyReleaseDate: Date | null;
  moneyReleaseStatus: EReleaseStatus;
  natiInfo: IInfo | null;
  operationType: EOperationType;
  payer: ITransactionPayer;
  posId: string;
  provider: ETransactionProvider;
  referenceId: 'goLive' | 'engine_mobyo_fee' | 'withdraw' | string; // Manter apenas string no futuro
  resumeVersion: string;
  receipt: string | null;
  saleChannel: ENatipaySaleChannel;
  stamped: string | null;
  total: ITransactionTotal | null;
  transactionStatus: ETransactionStatus;
  updatedAt: Date;
}
