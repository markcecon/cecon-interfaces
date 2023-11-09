import { FeatureEntity } from '../../feature';
import { CustomVariableEntity, IntervalTypeEnum } from '../../general';
import { SubscriptionStatusEnum } from '../enums';
import { ISubscription } from '../interfaces/i-subscription';
import { SubscriptionCompanyEntity } from './subscription-company.entity';
import { SubscriptionItemEntity } from './subscription-item.entity';
import { SubscriptionLogEntity } from './subscription-log.entity';

export class SubscriptionEntity implements ISubscription {
  // #region Properties (24)

  public amount: number = 0;
  public appId: string = '';
  public cancellationReason: string = '';
  public company: SubscriptionCompanyEntity = new SubscriptionCompanyEntity();
  public createdAt: Date = new Date();
  public customVariables: CustomVariableEntity[] = [];
  public cycledAt: Date = new Date();
  public expiresAt: Date = new Date();
  public features: FeatureEntity[] = [];
  public id: string = '';
  public interval: number = 0;
  public intervalType: IntervalTypeEnum = IntervalTypeEnum.MONTHS;
  public items: SubscriptionItemEntity[] = [];
  public logs: SubscriptionLogEntity[] = [];
  public notes: string = '';
  public partnerId: string | null = '';
  public planId: string = '';
  public planName: string = '';
  public renewPaymentDate: Date = new Date();
  public renovatedAt: Date = new Date();
  public startsAt: Date = new Date();
  public status: SubscriptionStatusEnum = SubscriptionStatusEnum.PENDING;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  // #endregion Properties (24)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}