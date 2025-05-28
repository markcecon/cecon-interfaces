import { BinanceStatus, SpreadAmountMode } from '../enums';

export interface IGlobalSettingBinance {
  id: string;
  key: string;
  rate: IGlobalSettingBinanceRate;
}

export interface IGlobalSettingBinanceRate {
  amount: number;
  priceBrl: number;
  priceUsd: number;
  spread: number;
  spreadMode: SpreadAmountMode;
  status: BinanceStatus;
  timestamp: string;
}
