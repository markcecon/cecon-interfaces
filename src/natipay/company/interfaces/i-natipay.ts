import { IDesenfilaToken } from '../../../app';
import { IDesenfilaConfig } from '../../../app/interfaces/i-desenfila-config';
import { IFee } from '../../../transaction';
/**
 * @deprecated
 * Esta interface está obsoleta. Use a propriedade fees para saber a conta do marketplace.
 */

export interface INatipay {
  // #region Properties (3)

  containerId: string;
  merchantId: string;
  token: IDesenfilaToken | null;
  balance: number;
  blockedBalance: number;
  goLive: boolean;
  fees: IFee[];
  config: IDesenfilaConfig | null;

  // #endregion Properties (3)
}
