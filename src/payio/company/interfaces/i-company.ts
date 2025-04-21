import { EIntDocType } from '../../../general';
import { IPaymentProvider } from '../../../general/interfaces/i-payment-provider';
import { IPayioAddress } from './i-address';
import { IPayioCompanyNatipayCredential } from './i-natipay-credential';

export interface IPayioCompany {
  active: boolean;
  address: IPayioAddress;
  containerId: string;
  country: string;
  createdAt: Date;
  currency: string;
  doc: string;
  docType: EIntDocType;
  email: string;
  id: string;
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
