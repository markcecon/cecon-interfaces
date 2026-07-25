/**
 * Interface para o contato do pagador
 */

import { EFirebankWithdrawDetailsKey } from "../../enums";

/**
 * Interface principal para o pagamento
 */
export interface IFirebankPaymentPost {
  /** Informações do pagador */
  payer: IFirebankPaymentPostPayer;

  /** Lista de beneficiários a receber um valor pré-configurado após a cobrança ser efetivamente paga */
  splits?: IFirebankPaymentPostSplit[];

  /** Informações da transação */
  transaction: IFirebankPaymentPostTransaction;

  /** Tipo da operação. Sempre enviar "PIX" como valor padrão */
  type: 'PIX';
}

/**
 * Interface para o endereço do pagador
 */
export interface IFirebankPaymentPostAddress {
  /** Cidade do endereço do cliente/pagador */
  city?: string;

  /** País do endereço do cliente/pagador */
  country?: string;

  /** Bairro do endereço do cliente/pagador */
  neighboor?: string;

  /** Número do endereço do cliente/pagador */
  number?: string;

  /** Estado do endereço do cliente/pagador */
  state?: string;

  /** Rua/logradouro do endereço do cliente/pagador */
  street?: string;

  /** CEP do endereço do cliente/pagador */
  zipCode?: string;
}

export interface IFirebankPaymentPostContact {
  /** E-mail de contato do cliente/pagador */
  mail?: string;

  /** Telefone de contato do cliente/pagador */
  phone?: string;
}

/**
 * Interface para o pagador
 */
export interface IFirebankPaymentPostPayer {
  /** Endereço do pagador */
  address?: IFirebankPaymentPostAddress;

  /** Informações de contato do pagador */
  contact?: IFirebankPaymentPostContact;

  /** Documentação do cliente/pagador, CPF ou CNPJ */
  document: string;

  /** Nome do cliente/pagador */
  fullName: string;
}

/**
 * Interface para o split (beneficiário)
 */
export interface IFirebankPaymentPostSplit {
  /**
   * Valor fixo a ser enviado.
   * Este valor pode ser somado automaticamente com o valor percentual (percent).
   * Este valor não pode ser maior do que o valor líquido recebido pela cobrança.
   */
  amount: number;

  /** CPF ou CNPJ do beneficiário */
  document: string;

  /** Identificador único para que possa ser usado em caso de alteração/cancelamento do pagamento split */
  externalId: string;

  /**
   * Valor em percentual a ser enviado. Por exemplo: caso a cobrança seja de R$10,00 (dez reais)
   * e seja informado o valor "10" no campo percent, então será considerado 10% sobre R$10,00, que é R$1,00.
   * Este valor pode ser somado automaticamente com o valor fixo (amount).
   * Este valor não pode ser maior do que o valor líquido recebido pela cobrança.
   */
  percent: number;

  /** Chave PIX do beneficiário */
  pixKey: string;

  /**
   * Tipo da chave PIX do beneficiário.
   * Podendo ser dos tipos: "RANDOM_KEY" (chave-aleatória), "DOCUMENT" (CPF ou CNPJ) ou "EMAIL" (e-mail)
   */
  pixKeyType: EFirebankWithdrawDetailsKey;
}

/**
 * Interface para a transação
 */
export interface IFirebankPaymentPostTransaction {
  /** Descrição da cobrança */
  description?: string;

  /** Data de expiração da cobrança */
  dueDate?: string;

  /** Identificador único para ser usado como rastreio das cobranças no envio do Webhook */
  externalId?: string;

  /** Valor da transação. Aceita valores quebrados, separados por ponto, como 123.45, representando R$123,45 */
  value: number;
}
