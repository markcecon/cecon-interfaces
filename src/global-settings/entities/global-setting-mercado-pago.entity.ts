import { IGlobalSettingMercadoPago } from '../interfaces';

export class GlobalSettingMercadoPagoEntity implements IGlobalSettingMercadoPago {
  public accessCode: string = '';
  public active: boolean = false;
  public automationFee: number = 0;
  public collectorId: string = '';
  public expiresAt: Date | null = null;
  public fee: number | null = null;
  public headers: Record<string, string> | null = null;
  public id: string = 'MERCADO_PAGO';
  public method: string | null = null;
  public mobyoFee: number = 0;
  public publicKey: string | null = null;
  public refreshToken: string | null = null;
  public renewAt: Date | null = null;
  public storeId: string | null = null;
  public tokenId: string | null = null;
  public url: string | null = null;

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
