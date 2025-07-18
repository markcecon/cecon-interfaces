import { EAmountMode, ECycle } from '../../../general';
import { ECardMode } from '../enums';
import { IPayioCardApplicableItem, IPayioCardAuth, IPayioCardConfig } from '../interfaces';

export class PayioCardConfigEntity implements IPayioCardConfig {
  public appIds: string[] = [];
  public applicableItems: IPayioCardApplicableItem[] = [];
  public auth?: IPayioCardAuth | null | undefined;
  public balance: number = 0;
  public billingCycle: ECycle = ECycle.NONE;
  public companiesIds: string[] = [];
  public consumerId: string | null = null;
  public consumerMetadata: string | null = null;
  public creditLimit: number = 0;
  public description: string | null = null;
  public discountAmount: number = 0;
  public discountAmountType: EAmountMode = EAmountMode.PERCENTAGE;
  public dueDate: Date = new Date();
  public externalReference: string | null = null;
  public invoiceLogs: string[] = [];
  public label: string = '';
  public mode: ECardMode = ECardMode.DISCOUNT;
  public password: string | null = null;
  public webhookUrls: string[] = [];

  constructor(data?: Partial<PayioCardConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
