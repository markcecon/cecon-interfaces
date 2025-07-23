export interface INatipayV2TransactionDetail {
  // Transaction Specific Details
  pixKey?: string;
  pixKeyType?: string;
  endToEndId?: string;
  
  // Transfer Details
  transferType?: string;
  recipientBank?: string;
  recipientAccount?: string;
  
  // Card Details
  cardNumber?: string;
  merchantName?: string;
  merchantCategory?: string;
  authorizationCode?: string;
  
  // ATM Details
  atmLocation?: string;
  atmNetwork?: string;
  
  // Investment Details
  investmentType?: string;
  investmentAmount?: number;
  
  // Additional Information
  reference?: string;
  externalReference?: string;
  notes?: string;
  
  // Metadata
  metadata: Record<string, any>;
} 