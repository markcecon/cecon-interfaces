/**
 * Interface para o contato do pagador
 */
import { EFirebankWithdrawDetailsKey } from '../../enums';
import {
  IFirebankPaymentPost,
  IFirebankPaymentPostAddress,
  IFirebankPaymentPostContact,
  IFirebankPaymentPostPayer,
  IFirebankPaymentPostSplit,
  IFirebankPaymentPostTransaction,
} from '../../interfaces';

/**
 * Interface para o endereço do pagador
 */
export class FirebankPaymentPostAddressEntity implements IFirebankPaymentPostAddress {
  /** Cidade do endereço do cliente/pagador */
  public city?: string = '';

  /** País do endereço do cliente/pagador */
  public country?: string = '';

  /** Bairro do endereço do cliente/pagador */
  public neighboor?: string = '';

  /** Número do endereço do cliente/pagador */
  public number?: string = '';

  /** Estado do endereço do cliente/pagador */
  public state?: string = '';

  /** Rua/logradouro do endereço do cliente/pagador */
  public street?: string = '';

  /** CEP do endereço do cliente/pagador */
  public zipCode?: string = '';
}

export class FirebankPaymentPostContactEntity implements IFirebankPaymentPostContact {
  /** E-mail de contato do cliente/pagador */
  public mail?: string = '';

  /** Telefone de contato do cliente/pagador */
  public phone?: string = '';
}

/**
 * Interface principal para o pagamento
 */
export class FirebankPaymentPostEntity implements IFirebankPaymentPost {
  /** Informações do pagador */
  public payer: FirebankPaymentPostPayerEntity = new FirebankPaymentPostPayerEntity();

  /** Lista de beneficiários a receber um valor pré-configurado após a cobrança ser efetivamente paga */
  public splits: FirebankPaymentPostSplitEntity[] = [];

  /** Informações da transação */
  public transaction: FirebankPaymentPostTransactionEntity = new FirebankPaymentPostTransactionEntity();

  /** Tipo da operação. Sempre enviar "PIX" como valor padrão */
  public type: 'PIX' = 'PIX';
}

/**
 * Interface para o pagador
 */
export class FirebankPaymentPostPayerEntity implements IFirebankPaymentPostPayer {
  /** Endereço do pagador */
  public address?: FirebankPaymentPostAddressEntity = new FirebankPaymentPostAddressEntity();

  /** Informações de contato do pagador */
  public contact?: FirebankPaymentPostContactEntity = new FirebankPaymentPostContactEntity();

  /** Documentação do cliente/pagador, CPF ou CNPJ */
  public document: string = '';

  /** Nome do cliente/pagador */
  public fullName: string = '';
}

/**
 * Interface para o split (beneficiário)
 */
export class FirebankPaymentPostSplitEntity implements IFirebankPaymentPostSplit {
  /**
   * Valor fixo a ser enviado.
   * Este valor pode ser somado automaticamente com o valor percentual (percent).
   * Este valor não pode ser maior do que o valor líquido recebido pela cobrança.
   */
  public amount: number = 0;

  /** CPF ou CNPJ do beneficiário */
  public document: string = '';

  /** Identificador único para que possa ser usado em caso de alteração/cancelamento do pagamento split */
  public externalId: string = '';

  /**
   * Valor em percentual a ser enviado. Por exemplo: caso a cobrança seja de R$10,00 (dez reais)
   * e seja informado o valor "10" no campo percent, então será considerado 10% sobre R$10,00, que é R$1,00.
   * Este valor pode ser somado automaticamente com o valor fixo (amount).
   * Este valor não pode ser maior do que o valor líquido recebido pela cobrança.
   */
  public percent: number = 0;

  /** Chave PIX do beneficiário */
  public pixKey: string = '';

  /**
   * Tipo da chave PIX do beneficiário.
   * Podendo ser dos tipos: "RANDOM_KEY" (chave-aleatória), "DOCUMENT" (CPF ou CNPJ) ou "EMAIL" (e-mail)
   */
  public pixKeyType: EFirebankWithdrawDetailsKey = EFirebankWithdrawDetailsKey.RANDOM_KEY;
}

/**
 * Interface para a transação
 */
export class FirebankPaymentPostTransactionEntity implements IFirebankPaymentPostTransaction {
  /** Descrição da cobrança */
  public description?: string = '';

  /** Data de expiração da cobrança */
  public dueDate?: string = '';

  /** Identificador único para ser usado como rastreio das cobranças no envio do Webhook */
  public externalId?: string = '';

  /** Valor da transação. Aceita valores quebrados, separados por ponto, como 123.45, representando R$123,45 */
  public value: number = 0;
}
