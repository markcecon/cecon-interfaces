import { ECardStatus } from '../enums/card-status.enum';
import { ECardType } from '../enums/card-type.enum';
import { INatipayV2CardLimit } from './i-card-limit';

export interface INatipayV2Card {
  // Basic Information
  id: string;
  cardNumber: string;
  maskedNumber: string;
  type: ECardType;
  status: ECardStatus;

  // Account Information
  accountId: string;
  accountNumber: string;

  // Card Details
  brand: 'VISA' | 'MASTERCARD' | 'ELO' | 'AMEX' | 'DISCOVER';
  level: 'CLASSIC' | 'GOLD' | 'PLATINUM' | 'BLACK' | 'INFINITE';
  network: 'VISA' | 'MASTERCARD' | 'ELO' | 'AMEX';

  // Cardholder Information
  cardholderName: string;
  expiryMonth: number;
  expiryYear: number;
  cvv?: string;

  // Limits
  limits: INatipayV2CardLimit;

  // Features
  features: {
    contactless: boolean;
    chip: boolean;
    magneticStripe: boolean;
    virtualCard: boolean;
    international: boolean;
    onlinePurchases: boolean;
    atmWithdrawals: boolean;
  };

  // Security
  security: {
    pin: string;
    pinAttempts: number;
    maxPinAttempts: number;
    lockedUntil?: Date;
    lastPinChange: Date;
    requiresCvv: boolean;
  };

  // Usage Statistics
  statistics: {
    totalTransactions: number;
    totalAmount: number;
    lastUsedAt?: Date;
    lastOnlineAt?: Date;
    lastAtmAt?: Date;
  };

  // Metadata
  tags: string[];
  metadata: Record<string, any>;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  activatedAt?: Date;
  blockedAt?: Date;
  expiresAt: Date;

  // System
  sandbox: boolean;
  version: string;
}
