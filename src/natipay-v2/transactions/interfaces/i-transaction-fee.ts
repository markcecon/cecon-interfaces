export interface INatipayV2TransactionFee {
  id: string;
  type: 'TRANSFER_FEE' | 'PIX_FEE' | 'MAINTENANCE_FEE' | 'OVERDRAFT_FEE' | 'CARD_FEE' | 'INVESTMENT_FEE';
  description: string;
  amount: number;
  currency: string;
  percentage?: number;

  // Fee Details
  applied: boolean;
  waived: boolean;
  refunded: boolean;

  // Timestamps
  createdAt: Date;
  appliedAt?: Date;
  waivedAt?: Date;
  refundedAt?: Date;
}
