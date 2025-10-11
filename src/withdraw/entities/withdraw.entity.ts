import { IInfo, InfoEntity, PixKeyEntity } from '../../general';
import { EPixValidation, EWithdrawStatus, EWithdrawType } from '../enums';
import { IWithdrawRequest } from '../interfaces/i-withdraw';

export class WithDrawRequestEntity implements IWithdrawRequest {
  public amount: number = 0;
  public approvedAt: Date | null = null;
  public createdAt: Date = new Date();
  public data: string | null = null;
  public id: string = '';
  public liveMode: boolean = false;
  public name: string = '';
  public natiInfo: IInfo = new InfoEntity();
  public pixKey: PixKeyEntity | null = null;
  public pixValidation: EPixValidation = EPixValidation.LOCKED;
  public refusalReason: string | null = null;
  public refusedAt: Date | null = null;
  public status: EWithdrawStatus = EWithdrawStatus.PROCESSING;
  public transactionId: string | null = null;
  public transferDocumentUrl: string | null = null;
  public type: EWithdrawType = EWithdrawType.MANUAL;
  public updatedAt: Date = new Date();
  public withdrawAt: Date = new Date();

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
