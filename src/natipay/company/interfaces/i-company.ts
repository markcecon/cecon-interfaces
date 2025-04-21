import { EDocType } from '../../../general';
import { IPixKey } from '../../../general/interfaces/i-pix-key';
import { ETransactionProvider } from '../../../transaction';
import { INatipayAddress } from './i-address';
import { INatipayCompanyExternalFee } from './i-company-external-fee';
import { INatipayFee } from './i-fee';
import { INatipay } from './i-natipay';
import { INatipaySponsorFee } from './i-sponsor-fee';

export interface INatipayCompany {
  active: boolean;
  address: INatipayAddress;
  containerId: string;
  containerName: string;
  country: string;
  createdAt: Date;
  currency: string;
  doc: string;
  docType: EDocType;
  email: string;
  externalFees: INatipayCompanyExternalFee[];
  fees: INatipayFee; // Usar essa propriedade para saber a conta do marketplace
  id: string;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  name: string;

  /**
   * @deprecated
   * Usar a propriedade fees para saber a conta do marketplace
   */
  natipay: INatipay | null;

  //Nome registrado legalmente
  paymentProvider: ETransactionProvider | null;
  phoneNumber: string;
  pixKeys: IPixKey[];
  sandbox: boolean;
  shortName: string;
  sponsorFees: INatipaySponsorFee[];

  //Nome comercial ou fantasia
  tags: string[];
  updatedAt: Date;
  version: string;
}
