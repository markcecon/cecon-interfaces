import { EDocType } from '../../../general';

export interface IPayioJwtPayloadInfo {
  // #region Properties (4)

  companyId: string;
  docType: EDocType | null;
  doc: string | null;
  companyName: string;
  natipayPix: boolean;

  containerId: string | null;
  containerName: string | null;
  sandbox: boolean;

  // #endregion Properties (4)
}
