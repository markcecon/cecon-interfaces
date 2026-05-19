import { EDocType, PixKeyEntity } from '../../../general';
import { ETransactionProvider } from '../../../transaction';
import { INatipayCompany } from '../interfaces/i-company';
import { NatiapyAddressEntity } from './address.entity';
import { NatipayCompanyExternalFeeEntity } from './company-external-fee.entity';
import { NatipayFeeEntity } from './natipay-fee.entity';
import { NatipayEntity } from './natipay.entity';
import { NatipaySponsorFeeEntity } from './sponsor-fee.entity';

export class NatipayCompanyEntity implements INatipayCompany {
  public active: boolean = false;
  public address: NatiapyAddressEntity = new NatiapyAddressEntity();
  public containerId: string = '';
  public containerName: string = '';
  public country: string = 'BR';
  public createdAt: Date = new Date();
  public currency: string = 'BRL';
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public email: string = '';
  public externalFees: NatipayCompanyExternalFeeEntity[] = [];
  public fees: NatipayFeeEntity = new NatipayFeeEntity();
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public logoUrl: string | null = null;
  public name: string = '';
  public natipay: NatipayEntity | null = new NatipayEntity();
  public paymentProvider: ETransactionProvider | null = null;
  public phoneNumber: string = '';
  public pixKeys: PixKeyEntity[] = [];
  public sandbox: boolean = false;
  public shortName: string = '';
  public sponsorFees: NatipaySponsorFeeEntity[] = [];
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public version: string = '';

  /**
   * Valor do limite de crédito da conta (null se não houver limite)
   */
  public creditLimit: number | null = 0;

  constructor(data?: Partial<NatipayCompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
