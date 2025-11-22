import { OrderEntity } from '../../../order';
import { EPayioAppSlug } from '../../app';
import { IPayioOrder } from '../interfaces';
import { PayioOrderIndoorEntity } from './indoor.entity';

export class PayioOrderEntity extends OrderEntity implements IPayioOrder {
  public appId: string | null = null;
  public appSlug: EPayioAppSlug = EPayioAppSlug.none;
  /** @deprecated use machineUid instead */
  public deviceId: string | null = null;
  public machineUid: string | null = null;
  public indoor: PayioOrderIndoorEntity | null = null;
  public resumeVersion: string = '';
  public tags: string[] = [];

  constructor(data?: Partial<PayioOrderEntity>) {
    super();
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
