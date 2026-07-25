import { EWebhookMethod, EWebhookType } from '../../..';

export interface IPayioWebhook {
  id: string;
  method: EWebhookMethod;
  type: EWebhookType;
  url: string;
}
