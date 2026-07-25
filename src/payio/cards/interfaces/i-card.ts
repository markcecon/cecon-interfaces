import { ECardMode, EPayioCardStatus } from "../enums";
import { IPayioCardConfig } from "./i-card-config";
/** @deprecated use ICard from @arcnetdev/arcnet-payio-interfaces instead */
export interface IPayioCard {
  active: boolean;
  companyId: string;
  config: IPayioCardConfig;
  containerId: string | null;
  createdAt: Date;
  id: string; // ID único (pode ser QR code, número, etc.)
  logs: string[];
  mode: ECardMode; // Tipo de cartão => CUSTOMER
  status: EPayioCardStatus; // Se está ativo
  tags: string[];
  unlockCode: string | null;
  unlockedAt: Date | null;
  updatedAt: Date;
}
