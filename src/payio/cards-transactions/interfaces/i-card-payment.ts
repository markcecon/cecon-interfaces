export interface IPayioCardTransactionPayment {
  createdAt: Date;
  id: string;
  metadata?: string | null; // Additional context
  updatedAt: Date;
  amount: number;
  type: string;
  pixKey: string;
  pixProvider: string;
  status: string;
  transactionId: string;
}
