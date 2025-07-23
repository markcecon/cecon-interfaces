import { EAmountMode } from '../../../general';
import { EPayioCardKeyType } from '../enums';
import { IPayioCardAuth } from './i-card-auth';
import { IPayioCardCompany } from './i-card-company';
import { IPayioCardItem } from './i-card-item';

export interface IPayioCardConfig {
  appIds: string[]; // => CUSTOMER
  auth?: IPayioCardAuth | null; // Senha do cartão para o modo MANAGER => CUSTOMER
  companies: IPayioCardCompany[]; // => CUSTOMER
  description?: string | null; // "Promoção de Verão" => SYSTEM || CUSTOMER
  discountAmount: number; // Valor (10% ou R$ 10,00) => CUSTOMER
  discountAmountType: EAmountMode; // Tipo de desconto => CUSTOMER
  items: IPayioCardItem[]; // Itens elegíveis (se houver restrição) => CUSTOMER
  key: string | null; // chave exclusiva de identificaçao do cartão em detrimento do id
  keyType: EPayioCardKeyType; // Tipo de chave => CUSTOMER
  password: string | null; // Senha do cartão => CUSTOMER || CONSUMER
}
