import { INatipayJwtPayloadInfo } from '../interfaces/i-payload-info';

export class NatipayJwtPayloadInfoEntity implements INatipayJwtPayloadInfo {
  // #region Properties (4)

  public companyId: string | null = null;
  public companyName?: string | null = null;
  public containerId: string | null = null;
  public containerName?: string | null = null;

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(data?: Partial<NatipayJwtPayloadInfoEntity>) {
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
