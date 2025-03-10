import {
  EDocType,
  EPixKeyType,
  IAddress,
  IDeliveryArea,
  IDeliveryAreaFixed,
  IMessagerChannel,
  IMobyoApiConfig,
  IOrigin,
  IPaymentProvider,
} from '../../general';
import { IInstallation } from '../../installation';
import { IFee } from '../../transaction';
import { ICompanyContact } from './i-company-contact';
import { ICompanyCustomData } from './i-company-custom-data';
import { ICompanyTrialPlansUsed } from './i-company-trial-useds';

export interface ICompany {
  // #region Properties (33)

  active: boolean;
  address: IAddress;
  bgImageUrl: string | null;
  config: IMobyoApiConfig | null;
  contacts: ICompanyContact[];
  containerId: string;
  createdAt: Date;
  customData: ICompanyCustomData;
  deliveryArea: IDeliveryArea[];
  deliveryAreaFixed?: IDeliveryAreaFixed | null;
  doc: string;
  docType: EDocType;
  email: string;
  fees: IFee[];
  fullName: string;
  goTransactionsLive: boolean;
  id: string;
  imageUrl: string | null;
  installationDesenfila?: IInstallation;
  internationalCode: string;
  logoUrl: string | null;
  /**@deprecated
   * Use phoneNumberNotification instead
   */
  messagerChannels: IMessagerChannel[];
  name: string;
  origin: IOrigin;
  paymentProvider: IPaymentProvider;
  phoneNumber: string;
  phoneNumbersNotification: string[];
  pixKey: string;
  pixKeyType: EPixKeyType;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
  usedTrialsPlans: ICompanyTrialPlansUsed[];
  version: string;

  // #endregion Properties (33)
}
