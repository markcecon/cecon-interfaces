import { EFrom, IInfo, InfoEntity } from '../../general';
import { ENatipaySaleChannel } from '../../natipay';
import { EFeePayer, EOperationType, EReleaseStatus, ETax, ETransactionProvider, ETransactionStatus } from '../enums';
import { ITransaction } from '../interfaces';
import { FeeDetailEntity } from './fee-detail.entity';
import { TransactionPayerEntity } from './payer.entity';
import { TransactionBalanceEntity } from './transaction-balance.entity';
import { TransactionResumeDataEntity } from './transaction-resume-data.entity';
import { TransactionTotalEntity } from './transaction-total.entity';

export class TransactionEntity implements ITransaction {
  public balance: TransactionBalanceEntity | null = null;
  public createdAt: Date = new Date();
  public data: string = '';
  public description: string = '';
  public externalOrderReference: string = '';
  public feeDetails: FeeDetailEntity[] = [];
  public feePayer: EFeePayer = EFeePayer.PLATFORM;
  public from: EFrom | ETax = EFrom.NATIPAY;
  public id: string = '';
  public moneyReleaseDate: Date | null = null;
  public moneyReleaseStatus: EReleaseStatus = EReleaseStatus.PENDING;
  public natiInfo: IInfo | null = new InfoEntity();
  public operationType: EOperationType = EOperationType.NATIPAY;
  public payer: TransactionPayerEntity = new TransactionPayerEntity();
  public posId: string = '';
  public provider: ETransactionProvider = ETransactionProvider.DEFAULT;
  public receipt: string | null = null;
  public referenceId: string = '';
  public resume: TransactionResumeDataEntity[] = [];
  public resumeVersion: string = '';
  public saleChannel: ENatipaySaleChannel = ENatipaySaleChannel.NATI_PDV;
  public stamped: string | null = null;
  public total: TransactionTotalEntity | null = null;
  public transactionStatus: ETransactionStatus = ETransactionStatus.PROCESSING;
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
