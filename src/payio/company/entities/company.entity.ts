import { EIntDocType, IPaymentProvider } from '../../../general';
import { IPayioCompany } from '../interfaces/i-company';
import { PayioAddressEntity } from './address.entity';
import { PayioCompanyNatipayCredentialEntity } from './natipay-credential.entity';

export class PayioCompanyEntity implements IPayioCompany {
  public active: boolean = false;
  public address: PayioAddressEntity = new PayioAddressEntity();
  public clientId: string = '';
  public clientSecret: string = '';
  public containerId: string = '';
  public country: string = 'BR';
  public createdAt: Date = new Date();
  public currency: string = 'BRL';
  public doc: string = '';
  public docType: EIntDocType = EIntDocType.CNPJ;
  public email: string = '';
  public id: string = '';
  public ifoodMerchantId: string | null = null;
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public logoUrl: string | null = null;
  public name: string = '';
  public natipayCredential: PayioCompanyNatipayCredentialEntity = new PayioCompanyNatipayCredentialEntity();
  public paymentProvider: IPaymentProvider | null = null;
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public shortName: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public version: string = '';

  constructor(data?: Partial<PayioCompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
