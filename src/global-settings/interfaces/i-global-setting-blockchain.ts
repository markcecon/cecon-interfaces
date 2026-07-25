import { EGlobalSettingsExchange, SpreadAmountMode } from '../enums';

export interface IGlobalSettingBlockchain {
  address: string;
  description: string;
  id: string;
  seed: string;
  spreads: IGlobalSettingBlockchainSpread[];
}

export interface IGlobalSettingBlockchainSpread {
  exchange: EGlobalSettingsExchange;
  id: string;
  mode: SpreadAmountMode;
  value: number;
}
