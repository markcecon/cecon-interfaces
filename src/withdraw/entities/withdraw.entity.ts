import { IInfo, InfoEntity, PixKeyEntity } from '../../general';
import { EPixValidation, EWithdrawRecurrenceInterval, EWithdrawStatus, EWithdrawType } from '../enums';
import { IWithdrawRequest } from '../interfaces/i-withdraw';

export class WithDrawRequestEntity implements IWithdrawRequest {
  public amount: number = 0;
  public cancelledAt: Date | null = null;
  public cancelledReason: string | null = null;
  public completedAt: Date | null = null;
  public createdAt: Date = new Date();
  public data: string | null = null;
  public failedAt: Date | null = null;
  public failedReason: string | null = null;
  public id: string = '';
  public isRecurring: boolean = false;
  public liveMode: boolean = false;
  public name: string = '';
  public natiInfo: IInfo = new InfoEntity();
  public pixKey: PixKeyEntity | null = null;
  public pixValidation: EPixValidation = EPixValidation.LOCKED;
  public recurrenceInterval?: EWithdrawRecurrenceInterval | undefined;
  public recurrenceDay: Date | null = null;
  public recurrenceEndAt: Date | null = null;
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
