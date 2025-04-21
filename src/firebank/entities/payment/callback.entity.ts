import { EDocType } from '../../../general';
import { IFirebankCallback } from '../../interfaces';

export class FirebankCallbackEntity implements IFirebankCallback {
  public businessTransactionId: string | null = null; // (Opcional) Identificador da transação fornecido pelo cliente.
  public createdDate: string = ''; // Data e hora em que a transação foi criada, no formato ISO 8601.
  public endToEndId: string = ''; // Identificador único do pagamento Pix gerado pelo sistema bancário.
  public payerBankAccount: string = ''; // Conta bancária do pagador.
  public payerBankAccountDigit: string = ''; // Dígito da conta bancária do pagador.
  public payerBankBranch: string = ''; // Agência bancária do pagador.
  public payerBankCode: string = ''; // Código do banco do pagador.
  public payerBankISPB: string = ''; // ISPB do banco do pagador.
  public payerBankName: string = ''; // Nome do banco do pagador.
  public payerDocumentNumber: EDocType = EDocType.CPF; // Número do documento do pagador.
  public payerName: string = ''; // Nome do pagador.
  public pixKey: string = ''; // Chave Pix utilizada para enviar o pagamento.
  public receiverBankAccount: string = ''; // Conta bancária do recebedor.
  public receiverBankBranch: string = ''; // Agência bancária do recebedor.
  public receiverBankCode: string = ''; // Código do banco do recebedor.
  public receiverBankISPB: string = ''; // ISPB do banco do recebedor.
  public receiverBankName: string = ''; // Nome do banco do recebedor.
  public receiverDocumentNumber: EDocType = EDocType.CPF; // Número do documento do recebedor.
  public receiverName: string = ''; // Nome do recebedor.
  public receiverToBankAccountDigit: string = ''; // Dígito da conta bancária do recebedor.
  public status: string = ''; // Status atual da transação. Exemplo: PAID indica que a retirada foi paga.
  public transactionId: string = ''; // Identificador único da transação gerado pela FireBanking.
  public value: number = 0; // Valor da transação em centavos.
  public voucherUrl: string = ''; // URL do comprovante.
}
