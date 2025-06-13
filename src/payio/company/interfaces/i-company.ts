import { EDocType } from '../../../general';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPayioAddress } from './i-address';
import { IPayioCompanyNatipayCredential } from './i-natipay-credential';

export interface IPayioCompany {
  active: boolean;
  address: IPayioAddress;
  clientId: string;
  clientSecret: string;
  containerId: string;
  country: string;
  createdAt: Date;
  currency: string;
  doc: string;
  docType: EDocType;
  email: string;
  id: string;
  ifoodMerchantId: string | null;
  imageUrl: string | null;
  internationalCode: string;
  logoUrl: string | null;
  name: string; //Nome registrado legalmente
  natipayCredential: IPayioCompanyNatipayCredential;
  paymentProvider: IPaymentProvider | null;
  phoneNumber: string;
  sandbox: boolean;
  shortName: string; //Nome comercial ou fantasia
  tags: string[];
  updatedAt: Date;
  version: string;
}
