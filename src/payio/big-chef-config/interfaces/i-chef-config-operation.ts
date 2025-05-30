import { EBarcodeFormat, EPayioChefTabMode } from '../../chef-config';

export interface IPayioBigChefConfigOperation {
  tabBarcodeFormat: EBarcodeFormat;
  tabBarcodeInitialFlag: string;
  // bip ao imprimir
  tabBipOnPrint: boolean;
  tabHeaderMessages: string[];
  tabListItems: string[];
  tabPrintFormat: 'simple' | 'tabular';

  // exibir cod bar
  tabShowBarCode: boolean;

  // Peso liquido
  tabShowNetWeight: boolean;
  tabShowOrderNumber: boolean;
  // preço por kilo
  tabShowPricePerKg: boolean;
  // preço total
  tabShowTotalPrice: boolean;
  // iniciar comanda em
  tabStartOrderIn: number;
  tabMode: EPayioChefTabMode;
  tabUrlLogo: string;
  visionDeviceId: string;
}
