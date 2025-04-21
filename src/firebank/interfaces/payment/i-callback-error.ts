export interface IFirebankCallbackError {
  businessTransactionId: string | null; // (Opcional) Identificador da transação fornecido pelo cliente.
  createdDate: string; // Data e hora em que a transação foi criada, no formato ISO 8601.
  endToEndId: string; // Identificador único do pagamento Pix gerado pelo sistema bancário.
  pixKey: string | null; // (Opcional) Chave Pix que deveria ser utilizada, mas está null em caso de erro.
  status: string; // Status atual da transação. Exemplo: ERROR indica que a transação falhou.
  transactionId: string; // Identificador único da transação gerado pela FireBanking.
  value: number; // Valor da transação em centavos.
}
