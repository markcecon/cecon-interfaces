import { EPayuioActivationStatus } from '../enums/activation-key-status.enum';
import { IPayioActivationKey } from '../interfaces/i-activation-key';

export class PayioActivationKeyEntity implements IPayioActivationKey {
  // #region Properties (22)

  public activationDate: Date | null = null;
  public activationReleasedId: string = '';
  public appId: string | null = null;
  public appSlug: string | null = null;
  public clientKey: string | null = null;
  public companyId: string | null = null;
  public companyName: string | null = null;
  public createdAt: Date = new Date();
  public createdBy: string | null = null;
  public distributionDate: Date | null = null;
  public distributedBy: string | null = null;
  public deviceId: string | null = null;
  public distributorId: string | null = null;
  public distributorKey: string | null = null;
  public distributorName: string | null = null;
  public expirationDate: Date | null = null;
  public id: string = '';
  public logs: string[] = [];
  public sandbox: boolean = false;
  public status: EPayuioActivationStatus = EPayuioActivationStatus.PENDING;
  public usageLimit: number = 0;
  public usedCount: number = 0;

  // #endregion Properties (22)

  // #region Constructors (1)

  constructor(data?: Partial<PayioActivationKeyEntity>) {
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
