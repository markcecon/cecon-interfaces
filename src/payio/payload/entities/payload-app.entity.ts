import { IPayioJwtPayloadApp } from '../interfaces/i-payload-app';

export class PayioJwtPayloadAppEntity implements IPayioJwtPayloadApp {
  // #region Properties (3)

  public id: string = '';
  public slug: string = '';
  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadAppEntity>) {
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
