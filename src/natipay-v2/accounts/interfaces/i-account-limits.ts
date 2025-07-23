export interface INatipayV2AccountLimits {
  // Daily Limits
  daily: {
    pix: number;
    transfer: number;
    withdrawal: number;
    card: number;
    total: number;
  };

  // Monthly Limits
  monthly: {
    pix: number;
    transfer: number;
    withdrawal: number;
    card: number;
    total: number;
  };

  // Transaction Limits
  transaction: {
    minAmount: number;
    maxAmount: number;
    maxPixAmount: number;
    maxTransferAmount: number;
  };

  // Card Limits
  card: {
    dailyLimit: number;
    monthlyLimit: number;
    maxTransactionAmount: number;
  };

  // Overdraft
  overdraft: {
    limit: number;
    used: number;
    available: number;
  };

  // Last Update
  lastUpdate: Date;
  version: string;
}
