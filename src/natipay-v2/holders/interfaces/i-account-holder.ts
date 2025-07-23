import { EDocType } from '../../../general';
import { EAccountHolderType } from '../enums/holder-type.enum';
import { EKycStatus } from '../enums/kyc-status.enum';
import { ERiskLevel } from '../enums/risk-level.enum';
import { INatipayV2HolderAddress } from './i-holder-address';
import { INatipayV2KycDocument } from './i-kyc-document';

export interface INatipayV2AccountHolder {
  // Basic Information
  id: string;
  type: EAccountHolderType;
  doc: string;
  docType: EDocType;
  name: string;
  tradeName?: string; // For PJ

  // Contact Information
  email: string;
  phoneNumber: string;
  internationalCode: string;
  address: INatipayV2HolderAddress;

  // Banking Information
  accountIds: string[];
  primaryAccountId: string;

  // KYC & Compliance
  kycStatus: EKycStatus;
  kycDocuments: INatipayV2KycDocument[];
  riskLevel: ERiskLevel;
  riskScore: number;

  // Security
  mfaEnabled: boolean;
  mfaMethods: string[];
  lastPasswordChange: Date;
  failedLoginAttempts: number;
  lockedUntil?: Date;

  // Preferences
  language: string;
  timezone: string;
  notificationPreferences: {
    email: boolean;
    sms: boolean;
    push: boolean;
    marketing: boolean;
  };

  // Metadata
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
  sandbox: boolean;
  version: string;
}
