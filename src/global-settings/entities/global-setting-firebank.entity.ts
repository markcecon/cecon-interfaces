import { IGlobalSettingFirebank } from '../interfaces/i-global-setting-firebank';

export class GlobalSettingFirebankEntity implements IGlobalSettingFirebank {
  public active: boolean = false;
  public apiKey: string = '';
  public baseUrl: string = '';
  public basicAuth64: string = '';
  public fee: number = 0;
  public feeMode: 'PERCENTAGE' | 'FIXED' = 'FIXED';
  public id: string = 'FIREBANK';
  public password: string = '';
  public userName: string = '';

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
