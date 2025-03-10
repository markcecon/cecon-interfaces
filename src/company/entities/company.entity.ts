import { EDocType } from '../../general';
import { AddressEntity } from '../../general/entities/address.entity';
import { DeliveryAreaEntity } from '../../general/entities/delivery-area.entity';
import { DeliveryAreaFixedEntity } from '../../general/entities/dellivery-area-fixed.entity';
import { MessagerChannelEntity } from '../../general/entities/messager-channel.entity';
import { MobyoApiConfigEntity } from '../../general/entities/mobyo-apiconfig.entity';
import { OriginEntity } from '../../general/entities/origin.entity';
import { PaymentProviderEntity } from '../../general/entities/payment-provider.entity';
import { EPixKeyType } from '../../general/enums';
import { IInstallation } from '../../installation';
import { IFee } from '../../transaction';
import { ICompany, ICompanyContact, ICompanyTrialPlansUsed } from '../interfaces';
import { CompanyCustomDataEntity } from './company-custom-data.entity';

export class CompanyEntity implements ICompany {
  // #region Properties (33)

  public active: boolean = false;
  public address: AddressEntity = new AddressEntity();
  public bgImageUrl: string | null = null;
  public config: MobyoApiConfigEntity | null = null;
  public contacts: ICompanyContact[] = [];
  public containerId: string = '';
  public createdAt: Date = new Date();
  public customData: CompanyCustomDataEntity = new CompanyCustomDataEntity();
  public deliveryArea: DeliveryAreaEntity[] = [];
  public deliveryAreaFixed: DeliveryAreaFixedEntity | null = null;
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public fees: IFee[] = [];
  public fullName: string = '';
  public goTransactionsLive: boolean = false;
  public id: string = '';
  public imageUrl: string | null = null;
  public installationDesenfila?: IInstallation | undefined;
  public internationalCode: string = '+55';
  public logoUrl: string | null = null;
  public messagerChannels: MessagerChannelEntity[] = [];
  public name: string = '';
  public origin: OriginEntity = new OriginEntity();
  public paymentProvider: PaymentProviderEntity = new PaymentProviderEntity();
  public phoneNumber: string = '';
  public phoneNumbersNotification: string[] = [];
  public pixKey: string = '';
  public pixKeyType: EPixKeyType = EPixKeyType.RANDOM_KEY;
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public usedTrialsPlans: ICompanyTrialPlansUsed[] = [];
  public version: string = '1.0.0';

  // #endregion Properties (33)

  // #region Constructors (1)

  constructor(data?: Partial<CompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
