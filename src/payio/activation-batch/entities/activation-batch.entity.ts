import { EPayioActivationBatchStatus } from '../enums/activation-batch-status.enum';
import { IPayioActivationBatch } from '../interfaces/i-activation-batch';

export class PayioActivationBatchEntity implements IPayioActivationBatch {
  public activatedLicenses: number = 0;
  public appId: string = '';
  public appName: string = '';
  public appSlug: string = '';
  public batchNumber: string = '';
  public createdAt: Date = new Date();
  public createdBy: string = '';
  public createdByName: string = '';
  public distributorId: string = '';
  public distributorName: string = '';
  public generatedLicenses: number = 0;
  public id: string = '';
  public logs: string[] = [];
  public negotiatedPrice: number = 0;
  public notes?: string;
  public sandbox: boolean = false;
  public sequentialNumber: number = 0;
  public status: EPayioActivationBatchStatus = EPayioActivationBatchStatus.PROCESSING;
  public tags: string[] = [];
  public totalLicenses: number = 0;
  public unitPrice: number = 0;
  public updatedAt: Date = new Date();
  public validUntil: Date = new Date();
  public year: number = new Date().getFullYear();

  constructor(data?: Partial<PayioActivationBatchEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
