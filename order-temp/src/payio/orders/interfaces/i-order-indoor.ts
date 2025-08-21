import { EIndoorMode } from '../../../order/enums';

export interface IPayioOrderIndoor {
  // #region Properties (4)

  deliveryDateTime: Date;

  mode: EIndoorMode;

  preferential: boolean;

  table: string;

  tab: string;

  // #endregion Properties (4)
}
