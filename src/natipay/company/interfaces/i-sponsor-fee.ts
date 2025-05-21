import { INatipayFee } from './i-fee';

export interface INatipaySponsorFee extends INatipayFee {
  companyId: string;
  containerId: string;
  id: string;
  sponsorName: string | null;
}
