import { INatipayFee } from './i-fee';

export interface INatipaySponsorFee extends INatipayFee {
  companyId: string;
  containerId: string;
  sponsorName: string | null;
}
