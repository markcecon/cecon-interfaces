import { DesenfilaConfigEntity, DesenfilaTokenEntity } from '../../../app';
import { IFee } from '../../../transaction';
import { INatipay } from '../interfaces/i-natipay';
/**
 * @deprecated
 * Esta classe está obsoleta. Use a propriedade fees para saber a conta do marketplace.
 */

export class NatipayEntity implements INatipay {
  public balance: number = 0;
  public blockedBalance: number = 0;
  public config: DesenfilaConfigEntity | null = null;
  public containerId: string = '';
  public fees: IFee[] = [];
  public goLive: boolean = false;
  public merchantId: string = '';
  public token: DesenfilaTokenEntity | null = null;

  constructor(data?: Partial<NatipayEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
