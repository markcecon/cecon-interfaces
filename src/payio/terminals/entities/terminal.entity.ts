import { EPayioActivationKeyStatus } from '../../activation-key';
import { EPayioVisionTerminalModel } from '../enum';
import { EPayioVisionTerminalOperation } from '../enum/operation.enum';
import { IPayioTerminal } from '../interfaces/i-terminal';

export class PayioTerminalEntity implements IPayioTerminal {
  public activationKey: string | null = null;
  public activationKeyId: string | null = null;
  public activationKeyStatus: EPayioActivationKeyStatus = EPayioActivationKeyStatus.NONE;
  public active: boolean = false;
  public appId: string = '';
  public companyId: string = '';
  public createdAt: Date = new Date();
  public deviceId: string = '';
  public id: string = '';
  public ipAddress: string = '';
  public ipServerAddress: string | null = null;
  public model: EPayioVisionTerminalModel = EPayioVisionTerminalModel.CONTROL_ID;
  public name: string = '';
  public operation: EPayioVisionTerminalOperation = EPayioVisionTerminalOperation.CHECKIN;
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public webhookUrl: string | null = null;

  constructor(data?: Partial<PayioTerminalEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
