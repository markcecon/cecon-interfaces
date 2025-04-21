import { IPayioChefConfigPrinter } from '../interfaces';

export class PayioChefConfigPrinterEntity implements IPayioChefConfigPrinter {
  // #region Properties (5)

  public active: boolean = true;
  public brand: string | null = null;
  public interface: 'USB' | 'TCP/IP' = 'USB';
  public model: string | null = null;
  public port: string | null = null;

  // #endregion Properties (5)

  // #region Constructors (1)

  constructor(data?: Partial<PayioChefConfigPrinterEntity>) {
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
