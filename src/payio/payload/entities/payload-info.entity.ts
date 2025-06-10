import { EDocType } from '../../../general';
import { IPayioJwtPayloadInfo } from '../interfaces/i-payload-info';

export class PayioJwtPayloadInfoEntity implements IPayioJwtPayloadInfo {
  // #region Properties (4)

  public companyId: string = '';
  public companyName: string = '';
  public containerId: string | null = null;
  public containerName: string | null = null;
  public sandbox: boolean = false;
  public docType: EDocType | null = null;
  public doc: string | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<PayioJwtPayloadInfoEntity>) {
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
