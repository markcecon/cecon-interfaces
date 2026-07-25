import { EMercadoPagoCallbackAction, EMercadoPagoCallbackType } from '../../enums';

export interface IMercadoPagoPaymentCallback {
  action: EMercadoPagoCallbackAction;
  api_version: string;
  data: IMercadoPagoPaymentCallbackData;
  date_created: string;
  id: number;
  live_mode: boolean;
  type: EMercadoPagoCallbackType;
  user_id: string;
}

export interface IMercadoPagoPaymentCallbackData {
  id: string;
}
