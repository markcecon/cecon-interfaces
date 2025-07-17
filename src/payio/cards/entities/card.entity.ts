import { EPayioCardStatus } from '../enums';
import { IPayioCardConfig } from '../interfaces';
import { IPayioCard } from '../interfaces/i-card';
import { PayioCardConfigEntity } from './card-config.entity';
import { PayioCardInfoEntity } from './card-info.entity';

export class PayioCardEntity implements IPayioCard {
  public activationId: string = '';
  public activationKey: string = '';
  public active: boolean = false;
  public cardNumber: string = '';
  public companiesIds: string[] = [];
  public config: IPayioCardConfig = new PayioCardConfigEntity();
  public consumerId: string | null = null;
  public consumerMetadata: string | null = null;
  public createdAt: Date = new Date();
  public cvv: string = '';
  public id: string = '';
  public info: PayioCardInfoEntity = new PayioCardInfoEntity();
  public logs: string[] = [];
  public status: EPayioCardStatus = EPayioCardStatus.PENDING;
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
