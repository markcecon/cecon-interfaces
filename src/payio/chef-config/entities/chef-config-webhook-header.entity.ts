import { IPayioChefConfigWebhookHeader } from '../interfaces/i-chef-config-webhook-header';

export class PayioChefConfigWebhookHeaderEntity implements IPayioChefConfigWebhookHeader {
  public key: string = '';
  public value: string = '';

  constructor(data?: Partial<PayioChefConfigWebhookHeaderEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
