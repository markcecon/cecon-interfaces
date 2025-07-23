import { EPayioTransactionType } from '../enums';

export interface IPayioCardTransaction {
  active: boolean;
  cardId: string;
  createdAt: Date;
  amount: number;
  reference: string;
  finalCompanyId: string;
  finalContainerId: string | null;
  id: string;
  metadata?: string | null; // Additional context
  sandbox: boolean;
  type: EPayioTransactionType;
  updatedAt: Date;
}
