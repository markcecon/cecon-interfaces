import { INatipaySponsorFee } from '../interfaces/i-sponsor-fee';
import { NatipayFeeEntity } from './natipay-fee.entity';

export class NatipaySponsorFeeEntity extends NatipayFeeEntity implements INatipaySponsorFee {
  public companyId: string = '';
  public containerId: string = '';
  public sponsorName: string | null = null;

  constructor(data?: Partial<NatipaySponsorFeeEntity>) {
    super(data);
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
