import { EAmountMode, ECycle } from '../../../general';
import { INatipayCardAuth } from './i-card-auth';
import { INatipayCardCompany } from './i-card-company';
import { INatipayCardItem } from './i-card-item';

export interface INatipayCardConfig {
  appIds: string[]; // => CUSTOMER
  auth?: INatipayCardAuth | null; // Senha do cartão para o modo MANAGER => CUSTOMER
  balance?: number; // Saldo disponível => SYSTEM
  billingCycle: ECycle; // Ciclo de faturamento => CUSTOMER
  companies: INatipayCardCompany[]; // => CUSTOMER
  creditLimit?: number; // Limite de crédito => CUSTOMER
  description?: string | null; // "Promoção de Verão" => SYSTEM || CUSTOMER
  discountAmount: number; // Valor (10% ou R$ 10,00) => CUSTOMER
  discountAmountType: EAmountMode; // Tipo de desconto => CUSTOMER
  dueDate: Date; // Data de vencimento => SYSTEM
  invoiceLogs: string[]; // => Ultimas faturas
  items: INatipayCardItem[]; // Itens elegíveis (se houver restrição) => CUSTOMER
  key: string | null; // chave exclusiva de identificaçao do cartão em detrimento do id
  password: string | null; // Senha do cartão => CUSTOMER || CONSUMER
  webhookUrls: string[]; // => CUSTOMER
}
