// src/models/base.entity.ts

import { EPixKeyType } from '../enums';

export interface IPixKey {
  // #region Properties (7)

  key: string;
  type: EPixKeyType;
  doc: string;
  name: string;
  description: string | null;
  isDefault: boolean;
  // #endregion Properties (7)
}
