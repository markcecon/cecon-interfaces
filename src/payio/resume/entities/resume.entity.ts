import { EResumeIntervalType } from "../enums";
import { IPayioResume, IPayioResumeChild } from "../interfaces";
import { IGeneralPayioResumeTotal } from "../interfaces/i-resume-general";
import { GeneralPayioResumeTotalEntity } from "./general-resume-total.entity";

export class PayioResumeEntity implements IPayioResume {
  public child: IPayioResumeChild[] = [];
  public childByType: IPayioResumeChild[] = [];
  public createdAt: Date = new Date();
  public id: string = '';
  public info: {
    companyId: string | null;
    containerId: string | null;
    deviceId: string | null;
    appId: string | null;
    appSlug: string | null;
  } = {
    companyId: null,
    containerId: null,
    deviceId: null,
    appId: null,
    appSlug: null,
  };
  public interval: EResumeIntervalType = EResumeIntervalType.YEAR;
  public totals: IGeneralPayioResumeTotal = new GeneralPayioResumeTotalEntity();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioResumeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
