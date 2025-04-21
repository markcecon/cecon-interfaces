import { EFrom, IDesenfilaInfo, IInfo, IMobyoInfo } from '../../general';
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
import { ETransactionOperation } from '../enums/transaction-operation.enum';
import { ITransactionBalance } from './i-balance';
import { IFeeDetail } from './i-fee-detail';
import { ITransactionPaymentMethod } from './i-payment-method';
import { ITransactionTotal } from './i-total';

export interface ITransaction {
  balance: ITransactionBalance | null;
  card: {};
  createdAt: Date;
  dateApproved: Date | null;
  dateCreated: Date; // Data da criação na origem
  dateLastUpdated: Date; // Data da última atualização na origem
  dateOfExpiration: Date | null; // Data de expiração na origem
  description: string;
  desenfilaInfo: IDesenfilaInfo | null;
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
  installments: number;
  liveMode: boolean;
  mobyoInfo: IMobyoInfo | null;
  moneyReleaseDate: Date | null;
  moneyReleaseStatus: EReleaseStatus;
  natiInfo: IInfo | null;
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
  transactionAmount: number;
  transactionAmountRefunded: number;
  transactionOperation: ETransactionOperation;
  transactionStatus: ETransactionStatus;

  /**
   * @description IDs das transações originais usadas para rastreamento de fees (tarifas).
   *
   *  - Quando o `feePayer` for MERCHANT: utilize `id[0]` para localizar
   *   a transação original associada à tarifa do lojista.
   *
   * - Quando o `feePayer` for PLATFORM: utilize `id[1]` para localizar
   *   a transação original associada à tarifa da plataforma.
   *
   * @important Esses IDs são cruciais para auditoria e reconciliação,
   *            mantendo o vínculo com as transações de origem.
   */
  transactionTraceIds: string[];
  updatedAt: Date;
}
