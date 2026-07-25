import { EDocType } from '../../../general';
import { INatipayCardCompany } from '../interfaces';

export class NatipayCardCompanyEntity implements INatipayCardCompany {
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public id: string = '';
  public name: string = '';

  constructor(data?: Partial<NatipayCardCompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
