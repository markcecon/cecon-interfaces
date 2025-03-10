import { EDocType, IPaymentProvider, PixKeyEntity } from '../../../general';
import { IDesenfila } from '../../desenfila/interfaces';
import { INatipayCompany } from '../interfaces/i-company';
import { NatiapyAddressEntity } from './address.entity';

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
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public logoUrl: string | null = null;
  public name: string = '';
  public natipay: IDesenfila | null = null;
  public paymentProvider: IPaymentProvider | null = null;
  public phoneNumber: string = '';
  public pixKeys: PixKeyEntity[] = [];
  public sandbox: boolean = false;
  public shortName: string = '';
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public version: string = '';

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
