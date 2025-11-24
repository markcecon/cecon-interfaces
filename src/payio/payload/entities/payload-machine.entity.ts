import { IPayioJwtPayloadMachine } from '../interfaces/i-payload-machine';

export class PayioJwtPayloadMachineEntity implements IPayioJwtPayloadMachine {
  public id: number = 0;
  public name: string | null = '';
  public uid: string | null = null;
  public settings?: Record<string, string> = {};

  constructor(data?: Partial<PayioJwtPayloadMachineEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
