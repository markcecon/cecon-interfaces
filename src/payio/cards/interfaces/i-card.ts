import { EPayioCardStatus } from '../enums';
import { IPayioCardConfig } from './i-card-config';
import { IPayioCardData } from './i-card-data';
import { IPayioCardInfo } from './i-card-info';

export interface IPayioCard {
  activationId: string;
  activationKey: string;
  active: boolean;
  config: IPayioCardConfig;
  createdAt: Date;
  data: IPayioCardData;
  id: string; // ID único (pode ser QR code, número, etc.)
  info: IPayioCardInfo;
  logs: string[];
  status: EPayioCardStatus; // Se está ativo
  tags: string[];
  updatedAt: Date;
}
