import { EWebhookMethod, EWebhookType } from '../../..';
import { IPayioWebhook } from '../interfaces';

export class PayioWebhookEntity implements IPayioWebhook {
  public id: string = '';
  public method: EWebhookMethod = EWebhookMethod.POST;
  public type: EWebhookType = EWebhookType.SEND_ORDER;
  public url: string = '';

  constructor(data?: Partial<PayioWebhookEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
  response: any;
}
