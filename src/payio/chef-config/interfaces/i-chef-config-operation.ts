import { EPayioChefOperationMode } from '../enums';
import { EBarcodeFormat } from '../enums/barcode-format.enum';
import { EPayioChefTabMode } from '../enums/tab-mode.enum';

export interface IPayioChefConfigOperation {
  barcodeFormat: EBarcodeFormat;
  barcodeInitialFlag: string;

  // bip ao imprimir
  bipOnPrint: boolean;
  headerMessages: string[];
  listItems: string[];
  multiOrder: boolean;
  operationMode: EPayioChefOperationMode;
  printFormat: 'simple' | 'tabular';

  // exibir cod bar
  showBarCode: boolean;

  // Peso liquido
  showNetWeight: boolean;
  showOrderNumber: boolean;

  // preço por kilo
  showPricePerKg: boolean;

  // preço total
  showTotalPrice: boolean;

  // iniciar comanda em
  startOrderIn: number;
  tabFormat: string | null;
  tabMode: EPayioChefTabMode;
  tabRegistered: boolean;
  urlLogo: string;
  visionDeviceId: string;
}
