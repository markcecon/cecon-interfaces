import { EAmountMode } from "../../../general";
import { EPayioTransactionType } from "../enums";
import { IPayioCardTransactionPayment } from "./i-card-payment";

export interface IPayioCardTransaction {
  active: boolean;
  afterBalance: number;
  beforeBalance: number;
  cardId: string;
  createdAt: Date;
  discountAmount: number;
  discountAmountType: EAmountMode;
  externalReference: string; // Order ID/transaction ID
  finalCompanyId: string;
  finalContainerId: string | null;
  id: string;
  metadata?: string | null; // Additional context
  paymentTransaction: IPayioCardTransactionPayment;
  sandbox: boolean;
  tags: string[];
  type: EPayioTransactionType;
  updatedAt: Date;
}
