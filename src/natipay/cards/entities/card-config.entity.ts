import { EAmountMode, ECycle } from '../../../general';
import { INatipayCardAuth, INatipayCardConfig } from '../interfaces';
import { NatipayCardCompanyEntity } from './card-company.entity';
import { NatipayCardItemEntity } from './card-item.entity';

export class NatipayCardConfigEntity implements INatipayCardConfig {
  public appIds: string[] = [];
  public auth?: INatipayCardAuth | null | undefined;
  public balance: number = 0;
  public billingCycle: ECycle = ECycle.NONE;
  public companies: NatipayCardCompanyEntity[] = [];
  public creditLimit: number = 0;
  public description: string | null = null;
  public discountAmount: number = 0;
  public discountAmountType: EAmountMode = EAmountMode.PERCENTAGE;
  public dueDate: Date = new Date();
  public invoiceLogs: string[] = [];
  public items: NatipayCardItemEntity[] = [];
  public key: string | null = null;
  public password: string | null = null;
  public webhookUrls: string[] = [];

  constructor(data?: Partial<NatipayCardConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
