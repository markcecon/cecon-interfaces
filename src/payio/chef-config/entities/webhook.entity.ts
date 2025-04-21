import { EWebhookMethod, EWebhookType } from '../../..';
import { IPayioWebhook, IPayioWebhookHeader } from '../interfaces';

export class PayioWebhookEntity implements IPayioWebhook {
  public active: boolean = true;
  public headers: PayioWebhookHeaderEntity[] = [];
  public locked: boolean = false;
  public method: EWebhookMethod = EWebhookMethod.POST;

  // Travar caso não esteja respondendo
  public response: any;
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
}

export class PayioWebhookHeaderEntity implements IPayioWebhookHeader {
  public key: string = '';
  public value: string = '';
}
