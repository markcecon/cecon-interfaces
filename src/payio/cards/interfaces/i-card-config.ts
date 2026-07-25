import { EAmountMode } from "../../../general";
import { EItemsRule, EPayioCardKeyType } from "../enums";
import { IPayioCardAuth } from "./i-card-auth";
import { IPayioCardCompany } from "./i-card-company";
import { IPayioCardItem } from "./i-card-item";

export interface IPayioCardConfig {
  appIds: string[]; // => CUSTOMER
  auth?: IPayioCardAuth | null; // Senha do cartão para o modo MANAGER => CUSTOMER
  companies: IPayioCardCompany[]; // => CUSTOMER
  description?: string | null; // "Promoção de Verão" => SYSTEM || CUSTOMER
  discountAmount: number; // Valor (10% ou R$ 10,00) => CUSTOMER
  discountAmountType: EAmountMode; // Tipo de desconto => CUSTOMER
  items: IPayioCardItem[]; // Itens elegíveis (se houver restrição) => CUSTOMER
  itemsRule: EItemsRule; // Regra de itens => CUSTOMER
  key: string | null; // chave exclusiva de identificaçao do cartão em detrimento do id
  keyType: EPayioCardKeyType; // Tipo de chave => CUSTOMER
  label: string; // Exibiçao ou nome do cartão => SYSTEM || CUSTOMER || CONSUMER
  password: string | null; // Senha do cartão => CUSTOMER || CONSUMER
}
