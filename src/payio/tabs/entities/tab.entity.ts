import { EPayioTabStatus } from '../enums';
import { IPayioTab } from '../interfaces/i-tab';

export class PayioTabEntity implements IPayioTab {
  public active: boolean = true;
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public status: EPayioTabStatus = EPayioTabStatus.AVAILABLE;
  public statusReason: string | null = null;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioTabEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
