import { UserReportEvidencesType, UserReportType } from '../enums';
import { IPayioUserReport, IPayioUserReportEvidences } from '../interfaces';

export class PayioUserReportEntity implements IPayioUserReport {
  public createdAt: Date = new Date();
  public data?: string | undefined;
  public description: string = '';
  public evidences: PayioUserReportEvidenceEntity[] = [];
  public faceId: string = '';
  public faceImage64: string = '';
  public id: string = '';
  public type: UserReportType = UserReportType.OTHER;
  public updatedAt: Date = new Date();
  public userId: string = '';

  constructor(data?: Partial<PayioUserReportEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class PayioUserReportEvidenceEntity implements IPayioUserReportEvidences {
  public base64?: string;
  public caption?: string;
  public type: UserReportEvidencesType = UserReportEvidencesType.OTHER;
  public url?: string;
}
