import { ISubscriptionCompany } from '../interfaces/i-subscription-company';

export class SubscriptionCompanyEntity implements ISubscriptionCompany {
  // #region Properties (6)

  public containerId: string | null = '';
  public doc: string | null = '';
  public docType: string | null = '';
  public id: string | null = '';
  public imageUrl: string | null = '';
  public name: string | null = '';

  // #endregion Properties (6)

  // #region Constructors (1)

  constructor(data?: Partial<SubscriptionCompanyEntity>) {
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