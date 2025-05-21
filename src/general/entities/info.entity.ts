// src/models/base.entity.ts

import { IInfo } from '../interfaces';

export class InfoEntity implements IInfo {
  // #region Properties (6)
  public companyId: string = '';
  public containerId: string = '';
  public containerName: string = '';
  public companyName: string = '';

  constructor(data?: Partial<InfoEntity>) {
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
