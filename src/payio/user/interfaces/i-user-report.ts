import { UserReportType } from '../enums';
import { UserReportEvidencesType } from '../enums/evidence-type.enum';

export interface IPayioUserReport {
  createdAt: Date;
  faceId: string;
  faceImage64: string;
  id: string;
  data?: string;
  type: UserReportType;
  description: string;
  evidences: IPayioUserReportEvidences[];
  updatedAt: Date;
  userId: string;
}

export interface IPayioUserReportEvidences {
  type: UserReportEvidencesType;
  url?: string;
  base64?: string;
  caption?: string;
}
