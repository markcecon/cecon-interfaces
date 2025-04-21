import { DesenfilaInfoEntity, EFrom, IDesenfilaInfo, IInfo, IMobyoInfo, InfoEntity, MobyoInfoEntity } from '../../general';
import { ENatipaySaleChannel } from '../../natipay';
import {
  EFeePayer,
  EMpStatus,
  EMpStatusDetail,
  EOperationType,
  EPaymentMethodId,
  EReleaseStatus,
  ETransactionOperation,
  ETransactionProvider,
  ETransactionStatus,
} from '../enums';
import { ITransaction } from '../interfaces';
import { FeeDetailEntity } from './fee-detail.entity';
import { TransactionBalanceEntity } from './transaction-balance.entity';
import { TransactionPaymentMethodEntity } from './transaction-payment-method.entity';
import { TransactionTotalEntity } from './transaction-total.entity';

export class TransactionEntity implements ITransaction {
  public balance: TransactionBalanceEntity | null = null;
  public card: {} = {};
  public createdAt: Date = new Date();
  public dateApproved: Date | null = null;
  public dateCreated: Date = new Date();
  public dateLastUpdated: Date = new Date();
  public dateOfExpiration: Date | null = null;
  public description: string = '';
  public desenfilaInfo: IDesenfilaInfo | null = new DesenfilaInfoEntity(); // TODO: Verificar se é necessário
  public externalOrderReference: string = '';
  public feeDetails: FeeDetailEntity[] = [];
  public feePayer: EFeePayer = EFeePayer.PLATFORM;
  public from: EFrom = EFrom.NATIPAY;
  public id: string = '';
  public installments: number = 0;
  public liveMode: boolean = true;
  public mobyoInfo: IMobyoInfo | null = new MobyoInfoEntity(); // TODO: Verificar se é necessário
  public moneyReleaseDate: Date | null = null;
  public moneyReleaseStatus: EReleaseStatus = EReleaseStatus.PENDING;
  public natiInfo: IInfo | null = new InfoEntity();
  public operationType: EOperationType = EOperationType.REGULAR_PAYMENT;
  public payerInfo: IInfo | null = new InfoEntity();
  public paymentMethod: TransactionPaymentMethodEntity | null = null;
  public paymentMethodId: EPaymentMethodId = EPaymentMethodId.ACCOUNT_MONEY;
  public posId: string = '';
  public provider: ETransactionProvider = ETransactionProvider.DEFAULT;
  public referenceId: string = '';
  public resumeVersion: string = '';
  public saleChannel: ENatipaySaleChannel = ENatipaySaleChannel.NATI_PDV;
  public stamped: string | null = null;
  public status: EMpStatus = EMpStatus.PENDING;
  public statusDetail: EMpStatusDetail = EMpStatusDetail.ACCREDITED;
  public total: TransactionTotalEntity | null = null;
  public transactionAmount: number = 0;
  public transactionAmountRefunded: number = 0;
  public transactionOperation: ETransactionOperation = ETransactionOperation.STAMP_NEEDED;
  public transactionStatus: ETransactionStatus = ETransactionStatus.PROCESSING;
  public transactionTraceIds: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<TransactionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
