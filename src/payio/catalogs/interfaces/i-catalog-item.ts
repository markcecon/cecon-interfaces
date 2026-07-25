import { EPayioScheduleSkill } from '../../schedules';
import { EPayioCatalogStatus, EPayioEngines, EPayioMeasure } from '../enums';
import { IPayioCatalogShift } from './i-catalog-shift';

export interface IPayioCatalogItem {
  catalogId: string;
  categoryId: string;
  companyId: string;
  containerId: string | null;
  createdAt: Date;
  description: string;
  dietaryRestrictions: string[];
  engine: EPayioEngines;
  externalCode: string;
  hasOptionGroups: boolean;
  id: string;
  imageUrl: string;
  index: number;
  name: string;
  measure: EPayioMeasure;
  productionPlaceId: string;
  optionGroupId: string[];
  price: number;
  serving: string;
  skill: EPayioScheduleSkill;
  shifts: IPayioCatalogShift[];
  status: EPayioCatalogStatus;
  tags: string[];
  updatedAt: Date;
}
