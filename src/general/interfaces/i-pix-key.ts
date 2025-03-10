// src/models/base.entity.ts

import { EPixKeyType } from '../enums';

export interface IPixKey {
  // #region Properties (7)

  key: string;
  type: EPixKeyType;
  description: string;
  isDefault: boolean;
  // #endregion Properties (7)
}
