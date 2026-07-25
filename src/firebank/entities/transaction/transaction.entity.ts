import { IFirebankTransaction } from '../../interfaces';
import {
  IFirebankTransactionCalendario,
  IFirebankTransactionDevedor,
  IFirebankTransactionHistory,
  IFirebankTransactionInfo,
  IFirebankTransactionLoc,
  IFirebankTransactionNegotiator,
  IFirebankTransactionOperation,
  IFirebankTransactionProviderResponse,
  IFirebankTransactionResponseBody,
  IFirebankTransactionValor,
} from '../../interfaces/transaction/i-transaction';

export class FirebankTransactionCalendarioEntity implements IFirebankTransactionCalendario {
  public criacao: string = '';
  public expiracao: number = 0;
}

export class FirebankTransactionDevedorEntity implements IFirebankTransactionDevedor {
  public cpf: string = '';
  public nome: string = '';
}

export class FirebankTransactionEntity implements IFirebankTransaction {
  public _id: string = '';
  public businessId: string = '';
  public createdAt: string = '';
  public history: FirebankTransactionHistoryEntity[] = [];
  public negotiator: FirebankTransactionNegotiatorEntity = new FirebankTransactionNegotiatorEntity();
  public operation: FirebankTransactionOperationEntity = new FirebankTransactionOperationEntity();
  public splits: null = null;
  public updatedAt: Date = new Date();
}

export class FirebankTransactionHistoryEntity implements IFirebankTransactionHistory {
  public createdAt: string = '';
  public error: string[] = [];
  public info: FirebankTransactionInfoEntity = new FirebankTransactionInfoEntity();
  public status: string = '';
}

export class FirebankTransactionInfoEntity implements IFirebankTransactionInfo {
  public finishedTransaction: boolean = false;
  public transactionWithError: boolean = false;
}

export class FirebankTransactionLocEntity implements IFirebankTransactionLoc {
  public criacao: string = '';
  public id: number = 0;
  public location: string = '';
  public tipoCob: string = '';
}

export class FirebankTransactionNegotiatorEntity implements IFirebankTransactionNegotiator {
  public clientType: string = '';
  public document: string = '';
  public fullName: string = '';
}

export class FirebankTransactionOperationEntity implements IFirebankTransactionOperation {
  public chargeTableID: string = '';
  public externalID: string | null = null;
  public fee: number = 0;
  public info: FirebankTransactionInfoEntity = new FirebankTransactionInfoEntity();
  public method: string = '';
  public provider: string = '';
  public providerSecondaryId: string = '';
  public result: number = 0;
  public status: string = '';
  public type: string = '';
  public value: number = 0;
}

export class FirebankTransactionProviderResponseEntity implements IFirebankTransactionProviderResponse {
  public pixCode: string = '';
  public providerSecondaryId: string = '';
  public responseBody: FirebankTransactionResponseBodyEntity = new FirebankTransactionResponseBodyEntity();
  public success: boolean = false;
}

export class FirebankTransactionResponseBodyEntity implements IFirebankTransactionResponseBody {
  public calendario: FirebankTransactionCalendarioEntity = new FirebankTransactionCalendarioEntity();
  public chave: string = '';
  public devedor: FirebankTransactionDevedorEntity = new FirebankTransactionDevedorEntity();
  public infoAdicionais: string[] = [];
  public loc: FirebankTransactionLocEntity = new FirebankTransactionLocEntity();
  public pixCopiaECola: string = '';
  public revisao: number = 0;
  public solicitacaoPagador: string = '';
  public status: string = '';
  public txid: string = '';
  public valor: FirebankTransactionValorEntity = new FirebankTransactionValorEntity();
}

export class FirebankTransactionValorEntity implements IFirebankTransactionValor {
  public modalidadeAlteracao: number = 0;
  public original: string = '';
}
