import { EAmountMode, ECycle } from '../../../general';
import { ECardMode } from '../enums';
import { IPayioCardApplicableItem } from './i-card-aplicable-item';
import { IPayioCardAuth } from './i-card-auth';

export interface IPayioCardConfig {
  discountAmount: number; // Valor (10% ou R$ 10,00) => CUSTOMER
  discountAmountType: EAmountMode; // Tipo de desconto => CUSTOMER
  appIds: string[]; // => CUSTOMER
  applicableItems?: IPayioCardApplicableItem[]; // Itens elegíveis (se houver restrição) => CUSTOMER
  auth?: IPayioCardAuth | null; // Senha do cartão para o modo MANAGER => CUSTOMER
  balance?: number; // Saldo disponível => SYSTEM
  billingCycle: ECycle; // Ciclo de faturamento => CUSTOMER
  dueDate: Date; // Data de vencimento => SYSTEM
  companiesIds: string[]; // => CUSTOMER
  consumerId: string | null; // => CUSTOMER || CONSUMER
  consumerMetadata: string | null; // => SYSTEM
  creditLimit?: number; // Limite de crédito => CUSTOMER
  description?: string | null; // "Promoção de Verão" => SYSTEM || CUSTOMER
  mode: ECardMode; // Tipo de cartão => CUSTOMER
  label: string; // Exibiçao ou nome do cartão => SYSTEM || CUSTOMER || CONSUMER
  password: string; // Senha do cartão => CUSTOMER || CONSUMER
  invoiceLogs: string[]; // => SYSTEM
  externalReference: string | null; // => CUSTOMER
  webhookUrls: string[]; // => CUSTOMER
}
