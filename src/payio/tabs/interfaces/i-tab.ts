import { EPayioTabStatus } from '../enums';

export interface IPayioTab {
  active: boolean;
  createdAt: Date;
  id: string;
  name: string | null;
  status: EPayioTabStatus;
  statusReason: string | null;
  updatedAt: Date;
  tags: string[];
}
