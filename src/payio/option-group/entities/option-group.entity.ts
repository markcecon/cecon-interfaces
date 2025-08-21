import { IPayioOptionGroup } from '../interfaces';
import { PayioOptionEntity } from './option.entity';

export class PayioOptionGroupEntity implements IPayioOptionGroup {
  public active: boolean = true;
  public companyId: string = '';
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public index: number = 0;
  public max: number = 0;
  public min: number = 0;
  public name: string = '';
  public options: PayioOptionEntity[] = [];
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioOptionGroupEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
