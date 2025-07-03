import { EPayioPreparationPlaceMode } from '../enums/mode.enum';
import { IPayioPreparationPlace } from '../interfaces';

export class PayioPreparationPlaceEntity implements IPayioPreparationPlace {
  public createdAt: Date = new Date();
  public id: string = '';
  public mode: EPayioPreparationPlaceMode = EPayioPreparationPlaceMode.IP;
  public name: string = '';
  public notes: string = '';
  public updatedAt: Date = new Date();
  public url: string = '';

  constructor(data?: Partial<PayioPreparationPlaceEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
