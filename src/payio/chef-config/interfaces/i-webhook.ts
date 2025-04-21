import { EWebhookMethod, EWebhookType } from '../../..';

export interface IPayioWebhook {
  // #region Properties (4)

  active: boolean;
  method: EWebhookMethod;
  headers: IPayioWebhookHeader[];
  url: string;
  type: EWebhookType;
  response: any; // Resposta do webhook
  locked: boolean; // Trava caso não esteja respondendo

  // #endregion Properties (4)
}
export interface IPayioWebhookHeader {
  // #region Properties (4)

  key: string;
  value: string;

  // #endregion Properties (4)
}
