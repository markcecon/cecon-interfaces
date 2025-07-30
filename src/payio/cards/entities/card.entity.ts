import { ECardMode, EPayioCardStatus } from '../enums';
import { IPayioCardConfig } from '../interfaces';
import { IPayioCard } from '../interfaces/i-card';
import { PayioCardConfigEntity } from './card-config.entity';

export class PayioCardEntity implements IPayioCard {
  public active: boolean = false;
  public companyId: string = '';
  public config: IPayioCardConfig = new PayioCardConfigEntity();
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public id: string = '';
  public logs: string[] = [];
  public mode: ECardMode = ECardMode.HYBRID;
  public status: EPayioCardStatus = EPayioCardStatus.BLOCKED;
  public tags: string[] = [];
  public unlockCode: string | null = null;
  public unlockedAt: Date | null = null;
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
