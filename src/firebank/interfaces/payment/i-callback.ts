import { EDocType } from '../../../general';

export interface IFirebankCallback {
  businessTransactionId: string | null; // (Opcional) Identificador da transação fornecido pelo cliente.
  createdDate: string; // Data e hora em que a transação foi criada, no formato ISO 8601.
  endToEndId: string; // Identificador único do pagamento Pix gerado pelo sistema bancário.
  payerBankAccount: string; // Conta bancária do pagador.
  payerBankAccountDigit: string; // Dígito da conta bancária do pagador.
  payerBankBranch: string; // Agência bancária do pagador.
  payerBankCode: string; // Código do banco do pagador.
  payerBankISPB: string; // ISPB do banco do pagador.
  payerBankName: string; // Nome do banco do pagador.
  payerDocumentNumber: EDocType; // Número do documento do pagador.
  payerName: string; // Nome do pagador.
  pixKey: string; // Chave Pix utilizada para enviar o pagamento.
  receiverBankAccount: string; // Conta bancária do recebedor.
  receiverBankBranch: string; // Agência bancária do recebedor.
  receiverBankCode: string; // Código do banco do recebedor.
  receiverBankISPB: string; // ISPB do banco do recebedor.
  receiverBankName: string; // Nome do banco do recebedor.
  receiverDocumentNumber: EDocType; // Número do documento do recebedor.
  receiverName: string; // Nome do recebedor.
  receiverToBankAccountDigit: string; // Dígito da conta bancária do recebedor.
  status: string; // Status atual da transação. Exemplo: PAID indica que a retirada foi paga.
  transactionId: string; // Identificador único da transação gerado pela FireBanking.
  value: number; // Valor da transação em centavos.
  voucherUrl: string; // URL do comprovante.
}
