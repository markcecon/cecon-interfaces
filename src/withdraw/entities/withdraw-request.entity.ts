import { DesenfilaInfoEntity, IDesenfilaInfo, IInfo, IMobyoInfo, InfoEntity, MobyoInfoEntity, PixKeyEntity } from '../../general';
import { EWithdrawRequestStatus } from '../enums';
import { IWithdrawRequest } from '../interfaces/i-withdraw-request';

export class WithDrawRequestEntity implements IWithdrawRequest {
  public amount: number = 0;
  public approvedAt: Date | null = null;
  public createdAt: Date = new Date();
  public desenfilaInfo: IDesenfilaInfo = new DesenfilaInfoEntity();
  public id: string = '';
  public liveMode: boolean = false;
  public mobyoInfo: IMobyoInfo = new MobyoInfoEntity();
  public name: string = '';
  public natiInfo: IInfo = new InfoEntity();
  public pixKey: PixKeyEntity | null = null;
  public refusalReason: string | null = null;
  public refusedAt: Date | null = null;
  public status: EWithdrawRequestStatus = EWithdrawRequestStatus.PENDING;
  public transactionId: string | null = null;
  public transferDocumentUrl: string | null = null;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<WithDrawRequestEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
