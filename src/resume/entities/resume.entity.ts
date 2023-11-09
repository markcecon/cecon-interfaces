import { IResume } from '../interfaces';
import { ResumeCollectionEntity } from './resume-collection.entity';
import { ResumeTotalEntity } from './resume-total.entity';

export class ResumeEntity implements IResume {
  // #region Properties (2)

  public counts: ResumeCollectionEntity[] = [];
  public totals: ResumeTotalEntity[] = [];

  // #endregion Properties (2)

  // #region Constructors (1)

  constructor(data?: Partial<ResumeEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }

  // #endregion Constructors (1)
}