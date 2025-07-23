import { EPixKeyStatus } from '../enums/pix-key-status.enum';
import { EPixKeyType } from '../enums/pix-key-type.enum';

export interface INatipayV2PixKey {
  // Basic Information
  id: string;
  keyType: EPixKeyType;
  keyValue: string;
  status: EPixKeyStatus;

  // Account Information
  accountId: string;
  accountNumber: string;

  // Key Details
  displayName?: string;
  description?: string;

  // Security
  isDefault: boolean;
  requiresConfirmation: boolean;
  confirmationMethod: 'SMS' | 'EMAIL' | 'APP' | 'HARDWARE_TOKEN';

  // Limits
  limits: {
    dailyLimit: number;
    monthlyLimit: number;
    maxTransactionAmount: number;
    usedToday: number;
    usedThisMonth: number;
  };

  // Usage Statistics
  statistics: {
    totalTransactions: number;
    totalAmount: number;
    lastUsedAt?: Date;
  };

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
  activatedAt?: Date;
  blockedAt?: Date;

  // System
  sandbox: boolean;
  version: string;
}
