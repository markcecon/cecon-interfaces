import { EZeEvent } from '../enums';
import { IPayioZeConfig } from '../interfaces/i-ze-config';

export class PayioZeConfigEntity implements IPayioZeConfig {
  public autoAccept: boolean = false;
  public createdAt: Date = new Date();
  public events: EZeEvent[] = [];
  public id: string = '';
  public name: string = '';
  public soundAlert: boolean = false;
  public updatedAt: Date = new Date();
  public webhook: string[] = [];

  constructor(data?: Partial<PayioZeConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
