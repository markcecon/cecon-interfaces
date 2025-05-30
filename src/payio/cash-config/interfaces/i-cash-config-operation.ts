import { EBarcodeFormat } from '../../chef-config';
import { ETefProvider } from '../enums';

export interface IPayioCashConfigOperation {
  barcodeFormat: EBarcodeFormat | null; // Balança etiquetadora
  /** @deprecated */
  tabFormat: string | null;
  tef: IPayioCashConfigOperationTef;
  pdvId: string;
  visionDeviceId: string;
}

export interface IPayioCashConfigOperationTef {
  companyNumber: string;
  provider: ETefProvider;
  terminal: string;
  tokenOtp: string;
  tokenRegister: string;
  url: string;
}
