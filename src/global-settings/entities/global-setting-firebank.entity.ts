import { IGlobalSettingFirebank } from '../interfaces/i-global-setting-firebank';

export class GlobalSettingFirebankEntity implements IGlobalSettingFirebank {
  public active: boolean = false;
  public apiKey: string = '';
  public baseUrl: string = '';
  public basicAuth64: string = '';
  public clientId: string = '';
  public clientSecret: string = '';
  public fee: number = 0;
  public feeMode: 'PERCENTAGE' | 'FIXED' = 'FIXED';
  public id: string = 'FIREBANK';
  public password: string = '';
  public userName: string = '';
  public withDrawScheduledTax: number = 1.16;
  public withDrawTax: number = 0.97;

  // Interval in seconds (default to 300 seconds = 5 minutes)
  public withdrawAutoInterval: number = 300;
  public withdrawAutoMaxAmount: number = 0;

  constructor(data?: Partial<GlobalSettingFirebankEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
