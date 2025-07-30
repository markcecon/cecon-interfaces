import { IPayioUserSession } from "../interfaces/i-user-sessions";

export class PayioUserSessionEntity implements IPayioUserSession {
  public appId: string = '';
  public companyId: string | null = null;
  public companyName: string | null = null;
  public deviceId: string = '';
  public lastAccessAt: Date = new Date();

  constructor(data?: Partial<PayioUserSessionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
