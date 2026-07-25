import { EPayioRole } from '../enums';
import { IPayioPermission } from '../interfaces/i-permission';

export class PayioPermissionEntity implements IPayioPermission {
  public active: boolean = true;
  public appId?: string | undefined;
  public code: string = '';
  public createdAt: Date = new Date();
  public description: string = '';
  public id: string = '';
  public name: string = '';
  public role: EPayioRole = EPayioRole.GENERAL;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioPermissionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
