import { EPayioCardStatus } from '../enums';
import { IPayioCardConfig } from './i-card-config';
import { IPayioCardInfo } from './i-card-info';

export interface IPayioCard {
  activationId: string;
  activationKey: string;
  active: boolean;
  cardNumber: string;
  config: IPayioCardConfig;
  createdAt: Date;
  cvv: string;
  id: string; // ID único (pode ser QR code, número, etc.)
  info: IPayioCardInfo;
  logs: string[];
  status: EPayioCardStatus; // Se está ativo
  updatedAt: Date;
}
