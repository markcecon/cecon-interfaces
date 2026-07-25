import { IPayioWebhook } from '../../chef-config';
import { IPayioBigChefConfig } from '../interfaces';
import { PayioBigChefConfigOperationEntity } from './config-operation.entity';
import { PayioBigChefConfigPrinterEntity } from './config-printer.entity';
import { PayioBigChefConfigScaleEntity } from './config-scale.entity';

export class PayioBigChefConfigEntity implements IPayioBigChefConfig {
  public createdAt: Date = new Date();
  public id: string = '';
  public name: string = '';
  public operation: PayioBigChefConfigOperationEntity = new PayioBigChefConfigOperationEntity();
  public printer: PayioBigChefConfigPrinterEntity | null = null;
  public scale: PayioBigChefConfigScaleEntity = new PayioBigChefConfigScaleEntity();
  public updatedAt: Date = new Date();
  public webhook: IPayioWebhook[] = [];

  constructor(data?: Partial<PayioBigChefConfigEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
