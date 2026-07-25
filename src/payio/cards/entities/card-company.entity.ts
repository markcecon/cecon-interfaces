import { EDocType } from '../../../general';
import { IPayioCardCompany } from '../interfaces';

export class PayioCardCompanyEntity implements IPayioCardCompany {
  public doc: string = '';
  public docType: EDocType = EDocType.CNPJ;
  public id: string = '';
  public name: string = '';

  constructor(data?: Partial<PayioCardCompanyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
