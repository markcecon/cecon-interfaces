import { IPayioVisionTerminal } from '../interfaces/i-vision-terminal';

export class PayioVisionTerminalEntity implements IPayioVisionTerminal {
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public function: string = '';
  public hook: string | null = null;
  public hookAuthorization: string | null = null;
  public id: number = 0;
  public ipAddress: string = '';
  public name: string = '';
  public password: string = '';
  public session: string | null = null;
  public type: string = '';
  public updatedAt: Date = new Date();
  public username: string = '';

  constructor(data?: Partial<PayioVisionTerminalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
