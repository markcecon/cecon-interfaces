import { IPayioChefConfigScale } from '../interfaces';

export class PayioChefConfigScaleEntity implements IPayioChefConfigScale {
  // #region Properties (3)

  public baudRate: '2400' | '4800' | '9600' | '19200' | '38400' | '57600' | '115200' = '2400';
  public brand: string | null = null;
  public model: string | null = null;

  // #endregion Properties (3)

  // #region Constructors (1)

  constructor(data?: Partial<PayioChefConfigScaleEntity>) {
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
