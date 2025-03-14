import { DesenfilaInfoEntity, IDesenfilaInfo, IInfo, IMobyoInfo, InfoEntity, MobyoInfoEntity } from '../../general';
import { EWithdrawRequestStatus } from '../enums';
import { IWithdrawRequest } from '../interfaces/i-withdraw-request';

export class WithDrawRequestEntity implements IWithdrawRequest {
  // #region Properties (11)

  public amount: number = 0;
  public aprovedAt: Date | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public liveMode: boolean = false;
  public pixKey: string | null = null;
  public status: EWithdrawRequestStatus = EWithdrawRequestStatus.PENDING;
  public transactionId: string | null = null;
  public transferDocumentUrl: string | null = null;
  public updatedAt: Date = new Date();
  public natiInfo: IInfo = new InfoEntity();
  public mobyoInfo: IMobyoInfo = new MobyoInfoEntity();
  public desenfilaInfo: IDesenfilaInfo = new DesenfilaInfoEntity();
  public name: string = '';
  public refusalReason: string | null = null;

  // #endregion Properties (11)

  // #region Constructors (1)

  constructor(data?: Partial<WithDrawRequestEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
