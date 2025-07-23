import { EAmlStatus } from '../enums/aml-status.enum';

export interface INatipayV2ComplianceCheck {
  // Basic Information
  id: string;
  entityId: string; // AccountHolder, Account, Transaction, etc.
  entityType: 'ACCOUNT_HOLDER' | 'ACCOUNT' | 'TRANSACTION' | 'TRANSFER' | 'PIX';

  // Compliance Status
  amlStatus: EAmlStatus;
  kycStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | 'UNDER_REVIEW';
  riskScore: number;
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';

  // Checks Performed
  checks: {
    identityVerification: boolean;
    documentVerification: boolean;
    addressVerification: boolean;
    phoneVerification: boolean;
    emailVerification: boolean;
    biometricVerification: boolean;
    watchlistCheck: boolean;
    politicallyExposedPerson: boolean;
  };

  // Flags and Alerts
  flags: string[];
  alerts: {
    type: string;
    severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    description: string;
    createdAt: Date;
  }[];

  // Compliance Details
  details: {
    sourceOfFunds: string;
    expectedMonthlyVolume: number;
    businessType?: string;
    occupation?: string;
    employer?: string;
  };

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  expiresAt?: Date;

  // System
  sandbox: boolean;
  version: string;
}
