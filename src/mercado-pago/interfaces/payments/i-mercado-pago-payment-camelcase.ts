import { EPaymentMethodId, EPaymentTypeId, EReleaseStatus } from '../../../transaction';

export interface IMercadoPagoPaymentCamelCase {
  additionalInfo: {}; // Pode tipar mais especificamente se necessário
  card: {}; // Pode tipar mais especificamente se necessário
  collectorId: number;
  couponAmount: number;
  currencyId: string;
  dateApproved: string;
  dateCreated: string;
  dateLastUpdated: string;
  description: string;
  externalReference?: string; // Adicionado como opcional
  id: number;
  installments: number;
  metadata: {}; // Pode tipar mais especificamente se necessário
  moneyReleaseDate: Date;
  moneyReleaseStatus: EReleaseStatus;
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
  paymentMethods: {
    issuerId: string;
    id: EPaymentMethodId;
    type: EPaymentTypeId;
  };
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
