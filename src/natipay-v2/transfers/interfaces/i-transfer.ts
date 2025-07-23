import { ETransferStatus } from '../enums/transfer-status.enum';
import { ETransferType } from '../enums/transfer-type.enum';

export interface INatipayV2Transfer {
  // Basic Information
  id: string;
  externalId?: string;
  type: ETransferType;
  status: ETransferStatus;

  // Account Information
  fromAccountId: string;
  fromAccountNumber: string;
  toAccountId?: string; // For internal transfers
  toAccountNumber: string;

  // Recipient Information
  recipient: {
    name: string;
    document?: string;
    accountNumber: string;
    bankCode: string;
    bankName: string;
    branchCode?: string;
    branchName?: string;
  };

  // Amount Information
  amount: number;
  currency: string;
  fees: number;
  totalAmount: number;

  // Transfer Details
  description: string;
  scheduledDate?: Date;
  executionDate?: Date;

  // Security
  requiresConfirmation: boolean;
  confirmationMethod: 'SMS' | 'EMAIL' | 'APP' | 'HARDWARE_TOKEN';
  confirmedAt?: Date;

  // Compliance
  complianceCheck: {
    passed: boolean;
    riskScore: number;
    flags: string[];
  };

  // Metadata
  tags: string[];
  metadata: Record<string, any>;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  processedAt?: Date;
  cancelledAt?: Date;

  // System
  sandbox: boolean;
  version: string;
}
