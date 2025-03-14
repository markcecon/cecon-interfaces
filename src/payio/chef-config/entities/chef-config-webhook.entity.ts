import { IPayioChefConfigWebhook } from '../interfaces';
import { IPayioChefConfigWebhookHeader } from '../interfaces/i-chef-config-webhook-header';

export class PayioChefConfigWebhookEntity implements IPayioChefConfigWebhook {
  public active: boolean = true;
  public headers: IPayioChefConfigWebhookHeader[] = [];
  public locked: boolean = false;
  public method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST';

  // Travar caso não esteja respondendo
  public response: any;
  public type:
    | 'PING'
    | 'GET_PRODUCT'
    | 'SEND_ORDER'
    | 'GET_ORDER'
    | 'CANCEL_ORDER'
    | 'GET_ORDER_STATUS'
    | 'VISION_SEND_IMG'
    | 'VISION_ASSIGN_POSITION' = 'SEND_ORDER';
  public url: string = '';

  constructor(data?: Partial<PayioChefConfigWebhookEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
