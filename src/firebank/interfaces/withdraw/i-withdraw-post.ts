export interface IFirebankWithdrawPost {
  details: IFirebankWithdrawPostDetails;
  externalId: string; // Identificador único para ser usado como rastreio das transferências no envio do Webhook
  type: string; // Tipo da operação. Sempre enviar “PIX” como valor padrão
  value: number; // Valor da transação. Aceita valores quebrados, separados por ponto, como 123.45, representando R$123,45, por exemplo
}

export interface IFirebankWithdrawPostDetails {
  document: string; // CPF ou CNPJ do beneficiário
  key: string; // Chave PIX do beneficiário
  keyType: string; // Tipo da chave PIX do beneficiário
  name: string; // Nome do beneficiário
}

export interface IFirebankWithdrawPostResponse {
  status: string; // Status da transação
  transactionId: string; // Identificador único para ser usado como rastreio das transferências no envio do Webhook
}
