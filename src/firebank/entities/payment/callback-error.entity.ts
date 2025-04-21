import { IFirebankCallbackError } from "../../interfaces";

export class FirebankCallbackErrorEntity implements IFirebankCallbackError {
  public businessTransactionId: string | null = null; // (Opcional) Identificador da transação fornecido pelo cliente.
  public createdDate: string = ''; // Data e hora em que a transação foi criada, no formato ISO 8601.
  public endToEndId: string = ''; // Identificador único do pagamento Pix gerado pelo sistema bancário.
  public pixKey: string | null = null; // (Opcional) Chave Pix que deveria ser utilizada, mas está null em caso de erro.
  public status: string = ''; // Status atual da transação. Exemplo: ERROR indica que a transação falhou.
  public transactionId: string = ''; // Identificador único da transação gerado pela FireBanking.
  public value: number = 0; // Valor da transação em centavos.
}
