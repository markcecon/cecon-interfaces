import { EPixKeyType } from '../../general/enums';
import { IDesenfilaConfig } from './i-desenfila-config';
import { IDesenfilaFee } from './i-desenfila-fee';
import { IDesenfilaToken } from './i-desenfila-token';

export interface IDesenfila {
  // #region Properties (3)

  containerId: string;
  merchantId: string;
  token: IDesenfilaToken | null;
  balance: number;
  blockedBalance: number;
  goLive: boolean;
  fees: IDesenfilaFee[];
  config: IDesenfilaConfig | null;
  provider: 'FIREBANKING' | 'NATIPAY';
  pixKeyType: EPixKeyType;
  pixKey: string;
  docType: 'CPF' | 'CNPJ';
  doc: string;
  // #endregion Properties (3)
}
