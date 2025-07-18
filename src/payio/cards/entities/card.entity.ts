import { EPayioCardStatus } from '../enums';
import { IPayioCardConfig } from '../interfaces';
import { IPayioCard } from '../interfaces/i-card';
import { PayioCardConfigEntity } from './card-config.entity';
import { PayioCardDataEntity } from './card-data.entity';
import { PayioCardInfoEntity } from './card-info.entity';

export class PayioCardEntity implements IPayioCard {
  public activationId: string = '';
  public activationKey: string = '';
  public active: boolean = false;
  public config: IPayioCardConfig = new PayioCardConfigEntity();
  public createdAt: Date = new Date();
  public data: PayioCardDataEntity = new PayioCardDataEntity();
  public id: string = '';
  public info: PayioCardInfoEntity = new PayioCardInfoEntity();
  public logs: string[] = [];
  public status: EPayioCardStatus = EPayioCardStatus.PENDING;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCardEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
