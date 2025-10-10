import { EFrom, IInfo } from '../../general';
import { ENatipaySaleChannel } from '../../natipay/orders/enums';
import {
  EFeePayer,
  EMpStatus,
  EMpStatusDetail,
  EOperationType,
  EPaymentMethodId,
  EReleaseStatus,
  ETransactionProvider,
  ETransactionStatus,
} from '../enums';
import { ITransactionBalance } from './i-balance';
import { IFeeDetail } from './i-fee-detail';
import { ITransactionPaymentMethod } from './i-payment-method';
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
  natiInfo: IInfo | null;
  moneyReleaseDate: Date | null;
  moneyReleaseStatus: EReleaseStatus;
  operationType: EOperationType;
  payerInfo: IInfo | null;
  paymentMethod: ITransactionPaymentMethod | null;
  paymentMethodId: EPaymentMethodId;
  posId: string;
  provider: ETransactionProvider;
  referenceId: 'goLive' | 'engine_mobyo_fee' | 'withdraw' | string; // Manter apenas string no futuro
  resumeVersion: string;
  saleChannel: ENatipaySaleChannel;
  stamped: string | null;
  status: EMpStatus; // status da origem
  statusDetail: EMpStatusDetail; // status detalhado da origem
  total: ITransactionTotal | null;
  transactionStatus: ETransactionStatus;
  updatedAt: Date;
}
