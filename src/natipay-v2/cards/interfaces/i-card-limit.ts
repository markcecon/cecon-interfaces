export interface INatipayV2CardLimit {
  // Credit Limits (for credit cards)
  creditLimit?: number;
  availableCredit?: number;
  usedCredit?: number;

  // Transaction Limits
  dailyLimit: number;
  monthlyLimit: number;
  maxTransactionAmount: number;

  // Usage Tracking
  dailyUsed: number;
  monthlyUsed: number;

  // ATM Limits
  atmDailyLimit: number;
  atmMonthlyLimit: number;
  atmDailyUsed: number;
  atmMonthlyUsed: number;

  // International Limits
  internationalEnabled: boolean;
  internationalDailyLimit: number;
  internationalMonthlyLimit: number;
  internationalDailyUsed: number;
  internationalMonthlyUsed: number;

  // Online Limits
  onlineEnabled: boolean;
  onlineDailyLimit: number;
  onlineMonthlyLimit: number;
  onlineDailyUsed: number;
  onlineMonthlyUsed: number;

  // Last Update
  lastUpdate: Date;
  version: string;
}
