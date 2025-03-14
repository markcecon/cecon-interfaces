import { IPayioChefConfigWebhookHeader } from './i-chef-config-webhook-header';

export interface IPayioChefConfigWebhook {
  // #region Properties (4)

  active: boolean;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: IPayioChefConfigWebhookHeader[];
  url: string;
  type:
    | 'PING'
    | 'GET_PRODUCT'
    | 'SEND_ORDER'
    | 'GET_ORDER'
    | 'CANCEL_ORDER'
    | 'GET_ORDER_STATUS'
    | 'VISION_SEND_IMG'
    | 'VISION_ASSIGN_POSITION';
  response: any; // Resposta do webhook
  locked: boolean; // Trava caso não esteja respondendo

  // #endregion Properties (4)
}
