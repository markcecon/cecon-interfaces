import { BinanceStatus, SpreadAmountMode } from '../enums';
import { IGlobalSettingBinance, IGlobalSettingBinanceRate } from '../interfaces';

export class GlobalSettingBinanceEntity implements IGlobalSettingBinance {
  public id: string = 'binance';
  public key: string = '';
  public rate: GlobalSettingBinanceRateEntity = new GlobalSettingBinanceRateEntity();

  constructor(data?: Partial<GlobalSettingBinanceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class GlobalSettingBinanceRateEntity implements IGlobalSettingBinanceRate {
  public amount: number = 0;
  public priceBrl: number = 0;
  public priceUsd: number = 0;
  public spread: number = 0;
  public spreadMode: SpreadAmountMode = SpreadAmountMode.PERCENTAGE;
  public status: BinanceStatus = BinanceStatus.ACTIVE;
  public timestamp: string = '';

  constructor(data?: Partial<GlobalSettingBinanceRateEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
