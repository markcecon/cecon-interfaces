import { EPayioVisionTerminalModel } from '../enum';
import { EPayioVisionTerminalOperation } from '../enum/operation.enum';

export interface IPayioTerminal {
  active: boolean;
  activationKeyId: string | null;
  appId: string;
  companyId: string;
  createdAt: Date;
  deviceId: string;
  id: string;
  ipAddress: string;
  ipServerAddress: string | null;
  model: EPayioVisionTerminalModel;
  name: string;
  tags: string[];
  operation: EPayioVisionTerminalOperation;
  updatedAt: Date;
  webhookUrl: string | null;
}
