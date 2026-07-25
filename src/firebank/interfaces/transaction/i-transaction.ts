export interface IFirebankTransaction {
  _id: string;
  businessId: string;
  createdAt: string;
  history: IFirebankTransactionHistory[];
  negotiator: IFirebankTransactionNegotiator;
  operation: IFirebankTransactionOperation;
  splits: null;
  updatedAt: Date;
}

export interface IFirebankTransactionCalendario {
  criacao: string;
  expiracao: number;
}

export interface IFirebankTransactionChave {
  chave: string;
  infoAdicionais: string[];
  pixCopiaECola: string;
  solicitacaoPagador: string;
  status: string;
  txid: string;
}

export interface IFirebankTransactionDevedor {
  cpf: string;
  nome: string;
}

export interface IFirebankTransactionHistory {
  createdAt: string;
  error: string[];
  info: IFirebankTransactionInfo;
  status: string;
}

export interface IFirebankTransactionHistoryProviderResponse {
  createdAt: Date;
  providerResponse: IFirebankTransactionProviderResponse;
}

export interface IFirebankTransactionInfo {
  finishedTransaction: boolean;
  transactionWithError: boolean;
}

export interface IFirebankTransactionLoc {
  criacao: string;
  id: number;
  location: string;
  tipoCob: string;
}

export interface IFirebankTransactionNegotiator {
  clientType: string;
  document: string;
  fullName: string;
}

export interface IFirebankTransactionOperation {
  chargeTableID: string;
  externalID: string | null;
  fee: number;
  info: IFirebankTransactionInfo;
  method: string;
  provider: string;
  providerSecondaryId: string;
  result: number;
  status: string;
  type: string;
  value: number;
}

export interface IFirebankTransactionProviderResponse {
  pixCode: string;
  providerSecondaryId: string;
  responseBody: IFirebankTransactionResponseBody;
  success: boolean;
}

export interface IFirebankTransactionResponseBody {
  calendario: IFirebankTransactionCalendario;
  chave: string;
  devedor: IFirebankTransactionDevedor;
  infoAdicionais: string[];
  loc: IFirebankTransactionLoc;
  pixCopiaECola: string;
  revisao: number;
  solicitacaoPagador: string;
  status: string;
  txid: string;
  valor: IFirebankTransactionValor;
}

export interface IFirebankTransactionSplits {
  createdAt: string;
  splits: null;
  updatedAt: Date;
}

export interface IFirebankTransactionValor {
  modalidadeAlteracao: number;
  original: string;
}
