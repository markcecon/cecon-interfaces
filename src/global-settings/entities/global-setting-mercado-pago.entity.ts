import { IGlobalSettingMercadoPago } from '../interfaces';

export class GlobalSettingMercadoPagoEntity implements IGlobalSettingMercadoPago {
  public accessToken: string = '';
  public active: boolean = false;
  public collectorId: string = '';
  public expiresAt: Date | null = null;
  public id: string = 'MERCADO_PAGO';
  public method: string | null = null;
  public publicKey: string | null = null;
  public refreshToken: string | null = null;
  public renewAt: Date | null = null;
  public storeId: string | null = null;
  public clientSecret: string | null = null;
  public clientId: string | null = null;

  constructor(data?: Partial<GlobalSettingMercadoPagoEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
