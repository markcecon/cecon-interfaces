import { EItemsRule, EPayioCardKeyType, PayioCardItemEntity } from '../..';
import { EAmountMode } from '../../../general';
import { IPayioCardAuth, IPayioCardConfig } from '../interfaces';
import { PayioCardCompanyEntity } from './card-company.entity';

export class PayioCardConfigEntity implements IPayioCardConfig {
  public appIds: string[] = [];
  public auth?: IPayioCardAuth | null | undefined;
  public companies: PayioCardCompanyEntity[] = [];
  public description: string | null = null;
  public discountAmount: number = 0;
  public discountAmountType: EAmountMode = EAmountMode.PERCENTAGE;
  public items: PayioCardItemEntity[] = [];
  public itemsRule: EItemsRule = EItemsRule.INCLUDED_ONLY;
  public key: string | null = null;
  public keyType: EPayioCardKeyType = EPayioCardKeyType.CPF;
  public label: string = '';
  public password: string | null = null;

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
