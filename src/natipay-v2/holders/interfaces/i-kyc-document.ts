export interface INatipayV2KycDocument {
  id: string;
  type: 'CPF' | 'CNPJ' | 'RG' | 'PASSPORT' | 'DRIVERS_LICENSE' | 'PROOF_OF_ADDRESS' | 'PROOF_OF_INCOME';
  number: string;
  issuingAuthority: string;
  issuingState: string;
  issuingCountry: string;
  issueDate: Date;
  expiryDate?: Date;

  // Document Status
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'EXPIRED';
  verified: boolean;
  verificationDate?: Date;

  // Files
  frontImageUrl?: string;
  backImageUrl?: string;
  selfieImageUrl?: string;

  // Metadata
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
