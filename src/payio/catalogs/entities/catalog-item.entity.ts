import { EPayioScheduleSkill } from '../../schedules';
import { EPayioCatalogStatus, EPayioEngines, EPayioMeasure } from '../enums';
import { IPayioCatalogItem } from '../interfaces';
import { PayioCatalogShiftEntity } from './catalog-shift.entity';

export class PayioCatalogItemEntity implements IPayioCatalogItem {
  public catalogId: string = '';
  public categoryId: string = '';
  public companyId: string = '';
  public containerId: string | null = null;
  public createdAt: Date = new Date();
  public description: string = '';
  public dietaryRestrictions: string[] = [];
  public engine: EPayioEngines = EPayioEngines.NONE;
  public externalCode: string = '';
  public hasOptionGroups: boolean = false;
  public id: string = '';
  public imageUrl: string = '';
  public index: number = 0;
  public measure: EPayioMeasure = EPayioMeasure.UN;
  public name: string = '';
  public optionGroupId: string[] = [];
  public price: number = 0;
  public productionPlaceId: string = '';
  public serving: string = '';
  public shifts: PayioCatalogShiftEntity[] = [];
  public skill: EPayioScheduleSkill = EPayioScheduleSkill.NORMAL;
  public status: EPayioCatalogStatus = EPayioCatalogStatus.AVAILABLE;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCatalogItemEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
