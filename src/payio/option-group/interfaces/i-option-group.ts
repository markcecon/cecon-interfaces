import { IPayioOption } from './i-option';

export interface IPayioOptionGroup {
  active: boolean;
  companyId: string;
  containerId: string | null;
  createdAt: Date;
  id: string;
  index: number;
  max: number;
  min: number;
  name: string;
  options: IPayioOption[];
  tags: string[];
  updatedAt: Date;
}
