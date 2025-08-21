import { EIndoorMode } from '../../../order/enums';
import { IPayioOrderIndoor } from '../interfaces/i-order-indoor';

export class PayioOrderIndoorEntity implements IPayioOrderIndoor {
  // #region Properties (5)

  public deliveryDateTime: Date = new Date(new Date().getTime() + 1000 * 60 * 15);
  public mode: EIndoorMode = EIndoorMode.DEFAULT;
  public preferential: boolean = false;
  public tab: string = '';
  public table: string = '';

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<PayioOrderIndoorEntity>) {
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
