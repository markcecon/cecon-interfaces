import { ETransactionCategory } from '../enums/transaction-category.enum';
import { ETransactionStatus } from '../enums/transaction-status.enum';
import { ETransactionType } from '../enums/transaction-type.enum';
import { INatipayV2TransactionDetail } from './i-transaction-detail';
import { INatipayV2TransactionFee } from './i-transaction-fee';

export interface INatipayV2Transaction {
  // Basic Information
  id: string;
  externalId?: string; // External system ID
  type: ETransactionType;
  status: ETransactionStatus;
  category: ETransactionCategory;

  // Account Information
  accountId: string;
  accountNumber: string;

  // Amount Information
  amount: number;
  currency: string;
  originalAmount?: number;
  originalCurrency?: string;

  // Balance Information
  balanceBefore: number;
  balanceAfter: number;

  // Transaction Details
  description: string;
  detail: INatipayV2TransactionDetail;
  fees: INatipayV2TransactionFee[];

  // Counterparty Information
  counterparty: {
    name: string;
    document?: string;
    accountNumber?: string;
    bankCode?: string;
    bankName?: string;
  };

  // Metadata
  tags: string[];
  metadata: Record<string, any>;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  processedAt?: Date;
  scheduledAt?: Date;
  expiresAt?: Date;

  // Security & Compliance
  riskScore: number;
  complianceFlags: string[];
  auditTrail: string[];

  // System
  sandbox: boolean;
  version: string;
}
