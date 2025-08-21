import { EDocType } from '../../../general';
import { IPayioJwtPayloadInfo } from '../interfaces/i-payload-info';

export class PayioJwtPayloadInfoEntity implements IPayioJwtPayloadInfo {
  public companyId: string = '';
  public companyName: string = '';
  public containerId: string | null = null;
  public containerName: string | null = null;
  public doc: string | null = null;
  public docType: EDocType | null = null;
  public natipayPix: boolean = false;
  public sandbox: boolean = false;

  constructor(data?: Partial<PayioJwtPayloadInfoEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
