import { PayioOrderQueueStatusEnum } from '../enums';

export interface IPayioOrderQueue {
  // #region Properties (10)

  attempts: number;
  createdAt: Date;
  reference: string;
  deviceId?: string;
  companyId: string;
  companyName: string;
  appId: string;
  error: string;
  id: string;
  lastAttemptAt: Date;
  data: string;
  status: PayioOrderQueueStatusEnum;

  // #endregion Properties (10)
}
