import { IPayioVisionConfig } from '../interfaces/i-config';

export class PayioVisionConfigEntity implements IPayioVisionConfig {
  public id: string = '';

  constructor(data?: Partial<PayioVisionConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
