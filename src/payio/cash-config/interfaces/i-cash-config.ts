import { IPayioWebhook } from '../../chef-config/interfaces';

import { IPayioCashConfigOperation } from './i-cash-config-operation';

export interface IPayioCashConfig {
  // #region Properties (9)

  createdAt: Date;
  id: string;
  name: string;
  operation: IPayioCashConfigOperation;
  updatedAt: Date;
  webhook: IPayioWebhook[];

  // #endregion Properties (9)
}
