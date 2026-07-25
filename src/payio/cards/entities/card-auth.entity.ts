import { IPayioCardAuth } from '../interfaces';

export class PayioCardAuthEntity implements IPayioCardAuth {
  public basic?: string | null = null;
  public password: string | null = null;
  public user: string | null = null;

  constructor(data?: Partial<PayioCardAuthEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
