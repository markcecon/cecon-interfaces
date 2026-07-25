import { EPayioScheduleSkill } from '../enums';

export interface IPayioScheduleProduct {
  code: string;
  description: string;
  price: number;
  skill: EPayioScheduleSkill;
  unit: string;
}
