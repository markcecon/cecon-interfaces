import { EBarcodeFormat } from '../../chef-config';
import { ETefProvider } from '../enums';

export interface IPayioCashConfigOperation {
  balanceMethod: EBarcodeFormat | null;
  tabFormat: string | null;
  tef: IPayioCashConfigOperationTef;
}

export interface IPayioCashConfigOperationTef {
  companyNumber: string;
  provider: ETefProvider;
  terminal: string;
  url: string;
}
