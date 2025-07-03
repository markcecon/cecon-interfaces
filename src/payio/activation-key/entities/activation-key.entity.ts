import { EPayioActivationKeyStatus } from '../enums/activation-key-status.enum';
import { IPayioActivationKey } from '../interfaces/i-activation-key';

export class PayioActivationKeyEntity implements IPayioActivationKey {
  public activationDate: Date | null = null;
  public appId: string | null = null;
  public appSlug: string | null = null;
  public batchId: string = '';
  public companyId: string | null = null;
  public companyName: string | null = null;
  public createdAt: Date = new Date();
  public createdBy: string | null = null;
  public deviceId: string | null = null;
  public distributedBy: string | null = null;
  public distributionDate: Date | null = null;
  public distributorId: string | null = null;
  public distributorKey: string | null = null;
  public distributorName: string | null = null;
  public expirationDate: Date | null = null;
  public id: string = '';
  public key: string | null = null;
  public logs: string[] = [];
  public partnerName: string | null = null;
  public partnerReference: string | null = null;
  public sandbox: boolean = false;
  public status: EPayioActivationKeyStatus = EPayioActivationKeyStatus.PENDING;
  public tags: string[] = [];

  constructor(data?: Partial<PayioActivationKeyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
