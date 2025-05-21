import { EAmountMode } from '../../../transaction';
import { INatipayCompanyExternalFee } from '../interfaces/i-company-external-fee';
export class NatipayCompanyExternalFeeEntity implements INatipayCompanyExternalFee {
  public amount: number = 0;
  public amountMode: EAmountMode = EAmountMode.PERCENTAGE;
  public id: string = '';
  public name: string = '';

  constructor(data?: Partial<NatipayCompanyExternalFeeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
