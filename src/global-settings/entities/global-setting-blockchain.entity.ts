import { EGlobalSettingsExchange, SpreadAmountMode } from '../enums';
import { IGlobalSettingBlockchain } from '../interfaces';
import { IGlobalSettingBlockchainSpread } from '../interfaces/i-global-setting-blockchain';

export class GlobalSettingBlockchainEntity implements IGlobalSettingBlockchain {
  public address: string = '';
  public description: string = '';
  public id: string = 'blockchain';
  public seed: string = '';
  public spreads: GlobalSettingBlockchainSpreadEntity[] = [];

  constructor(data?: Partial<GlobalSettingBlockchainEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class GlobalSettingBlockchainSpreadEntity implements IGlobalSettingBlockchainSpread {
  public exchange: EGlobalSettingsExchange = EGlobalSettingsExchange.BINANCE;
  public id: string = '';
  public mode: SpreadAmountMode = SpreadAmountMode.PERCENTAGE;
  public value: number = 0;

  constructor(data?: Partial<GlobalSettingBlockchainSpreadEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
