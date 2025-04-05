export interface IMercadoPagoPaymentCamelCase {
  additionalInfo: {}; // Pode tipar mais especificamente se necessário
  card: {}; // Pode tipar mais especificamente se necessário
  collectorId: number;
  couponAmount: number;
  currencyId: string;
  dateApproved: string;
  moneyReleaseStatus: string;
  dateCreated: string;
  dateLastUpdated: string;
  description: string;
  externalReference?: string; // Adicionado como opcional
  id: number;
  installments: number;
  metadata: {}; // Pode tipar mais especificamente se necessário
  moneyReleaseDate: string;
  payer: {
    id: number;
    email: string;
    identification: {
      type: string;
      number: number;
    };
    type: string;
  };
  paymentMethodId: string;
  paymentTypeId: string;
  status: string;
  statusDetail: string;
  transactionAmount: number;
  transactionAmountRefunded: number;
  transactionDetails: {
    netReceivedAmount: number;
    totalPaidAmount: number;
    overpaidAmount: number;
    installmentAmount: number;
  };
}
