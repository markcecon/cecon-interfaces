/**
 * Resposta da criação do pagamento
 */
export interface IFirebankPayment {
  _id: string;
  businessId: string;
  createdAt: Date;
  history: Array<{
    status: string;
    error?: Array<{
      createdAt: Date;
      info: {
        finishedTransaction: boolean;
        transactionWithError: boolean;
      };
    }>;
    info?: {
      finishedTransaction: boolean;
      transactionWithError: boolean;
    };
    providerResponse?: {
      success: boolean;
      pixCode: string;
      providerSecondaryId: string;
      responseBody: {
        revisao: number;
        loc: {
          id: number;
          location: string;
          tipoCob: string;
          criacao: Date;
        };
        calendario: {
          criacao: Date;
          expiracao: number;
        };
        devedor: {
          cpf: string;
          nome: string;
        };
        valor: {
          original: string;
          modalidadeAlteracao: number;
        };
        chave: string;
        txid: string;
        status: string;
        solicitacaoPagador: string;
        infoAdicionais: Array<{
          nome: string;
          valor: string;
        }>;
        pixCopiaECola: string;
      };
    };
    createdAt: Date;
  }>;
  negotiator: {
    fullName: string;
    document: string;
    clientType: string;
  };
  operation: {
    type: string;
    method: string;
    value: number;
    provider: string;
    status: string;
    chargeTableID: string;
    externalID: string;
    fee: number;
    result: number;
    providerSecondaryId: string;
    info: {
      finishedTransaction: boolean;
      transactionWithError: boolean;
    };
  };
  splits: null;
  updatedAt: Date;
}
