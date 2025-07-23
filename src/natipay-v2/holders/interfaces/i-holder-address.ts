export interface INatipayV2HolderAddress {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Verification
  verified: boolean;
  verificationDate?: Date;

  // Type
  type: 'RESIDENCE' | 'BUSINESS' | 'MAILING';
  isPrimary: boolean;
}
