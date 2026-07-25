import { IPayioOption } from '../interfaces/i-option';

export class PayioOptionEntity implements IPayioOption {
  public description: string = '';
  public externalCode: string = '';
  public id: string = '';
  public imageUrl: string = '';
  public index: number = 0;
  public name: string = '';
  public price: number = 0;

  constructor(data?: Partial<PayioOptionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
