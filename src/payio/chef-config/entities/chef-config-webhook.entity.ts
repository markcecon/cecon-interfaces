import { IPayioChefConfigWebhook } from '../interfaces';

export class PayioChefConfigWebhookEntity implements IPayioChefConfigWebhook {
  // #region Properties (9)

  public active: boolean = true;
  public authToken: string | null = null;
  public locked: boolean = false;
  public method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST';
  // Travar caso não esteja respondendo
  public response: string | null = null;
  public secret: string | null = null;

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

  // #endregion Properties (9)

  // #region Constructors (1)

  constructor(data?: Partial<PayioChefConfigWebhookEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
