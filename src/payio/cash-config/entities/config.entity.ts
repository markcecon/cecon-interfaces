import { IPayioWebhook } from '../../chef-config/interfaces';
import { IPayioCashConfig } from '../interfaces/i-cash-config';
import { IPayioCashConfigOperation } from '../interfaces/i-cash-config-operation';
import { PayioCashConfigOperationEntity } from './config-operation.entity';

export class PayioCashConfigEntity implements IPayioCashConfig {
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public operation: IPayioCashConfigOperation = new PayioCashConfigOperationEntity();

  public updatedAt: Date = new Date();
  public webhook: IPayioWebhook[] = [];

  constructor(data?: Partial<PayioCashConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
