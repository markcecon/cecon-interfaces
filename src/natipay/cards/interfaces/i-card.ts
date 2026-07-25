import { ENatipayCardMode, ENatipayCardStatus } from '../enums';
import { ENatipayCardStatusProduction } from '../enums/status-production.enum';
import { ENatipayCardType } from '../enums/type.enum';
import { INatipayCardAccountProvider } from './i-card-account-provider';
import { INatipayCardConfig } from './i-card-config';
import { INatipayCardData } from './i-card-data';

export interface INatipayCard {
  accountProvider: INatipayCardAccountProvider;
  active: boolean;
  companyId: string;
  config: INatipayCardConfig;
  consumerExternalReference: string | null; // => CUSTOMER
  consumerId: string | null; // => CUSTOMER || CONSUMER
  consumerMetadata: string | null; // => SYSTEM
  containerId: string | null;
  createdAt: Date;
  data: INatipayCardData;
  id: string; // ID único (pode ser QR code, número, etc.)
  label: string; // Exibiçao ou nome do cartão => SYSTEM || CUSTOMER || CONSUMER
  logs: string[];
  mode: ENatipayCardMode; // Tipo de cartão => CUSTOMER
  status: ENatipayCardStatus; // Se está ativo
  statusProduction: ENatipayCardStatusProduction;
  tags: string[];
  type: ENatipayCardType;
  unlockCode: string | null;
  unlockedAt: Date | null;
  updatedAt: Date;
}
