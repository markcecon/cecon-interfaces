import { PayioOrderQueueStatusEnum } from '../enums';
import { IPayioOrderQueue } from '../interfaces/i-order-queue';

export class PayioOrderQueueEntity implements IPayioOrderQueue {
  public deviceId?: string;
  public appId: string = '';
  public attempts: number = 0;
  public companyId: string = '';
  public companyName: string = '';
  public createdAt: Date = new Date();
  public data: string = '';
  public error: string = '';
  public id: string = '';
  public lastAttemptAt: Date = new Date();
  public reference: string = '';
  public status: PayioOrderQueueStatusEnum = PayioOrderQueueStatusEnum.pending;
}
