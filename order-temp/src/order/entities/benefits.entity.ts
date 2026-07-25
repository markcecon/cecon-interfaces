import { SponsorshipValueEntity } from '../../general/entities/sponsorship-value.entity';
import { EVoucherTargetTypes } from '../../voucher';
import { IOrderBenefits } from '../interfaces';

export class OrderBenefitsEntity implements IOrderBenefits {
  // #region Properties (6)

  public description: string = '';
  public id: string = '';
  public referenceId: string = '';
  public sponsorshipValues: SponsorshipValueEntity[] = [];
  public value: number = 0;
  public target: EVoucherTargetTypes = EVoucherTargetTypes.CART;

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<OrderBenefitsEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}
