import { EAccountStatus } from '../enums/account-status.enum';
import { EAccountType } from '../enums/account-type.enum';
import { INatipayV2AccountBalance } from './i-account-balance';
import { INatipayV2AccountLimits } from './i-account-limits';

export interface INatipayV2Account {
  // Basic Information
  id: string;
  accountNumber: string;
  accountType: EAccountType;
  status: EAccountStatus;

  // Bank Information
  bankCode: string;
  bankName: string;
  branchCode: string;
  branchName: string;

  // Account Holder
  accountHolderId: string;
  jointHolders?: string[]; // For joint accounts

  // Balance Information
  balance: INatipayV2AccountBalance;
  limits: INatipayV2AccountLimits;

  // Account Features
  features: {
    pixEnabled: boolean;
    cardEnabled: boolean;
    investmentEnabled: boolean;
    internationalTransfers: boolean;
    overdraft: boolean;
  };

  // Account Settings
  settings: {
    overdraftLimit: number;
    interestRate: number;
    maintenanceFee: number;
    minimumBalance: number;
  };

  // Security
  securityLevel: 'BASIC' | 'STANDARD' | 'PREMIUM';
  lastActivityAt: Date;

  // Metadata
  createdAt: Date;
  updatedAt: Date;
  openedAt: Date;
  closedAt?: Date;
  sandbox: boolean;
  version: string;
}
