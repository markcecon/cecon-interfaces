export interface INatipayV2AccountBalance {
  // Current Balance
  current: number;
  available: number;
  blocked: number;
  pending: number;

  // Balance Details
  overdraft: number;
  overdraftLimit: number;
  overdraftUsed: number;

  // Investment Balance (if applicable)
  investment: {
    total: number;
    available: number;
    blocked: number;
  };

  // Currency
  currency: string;

  // Last Update
  lastUpdate: Date;

  // Balance History
  previousBalance: number;
  balanceChange: number;
  lastTransactionAt?: Date;
}
