import { EBarcodeFormat, EPayioChefOperationMode, EPayioChefTabMode } from '../enums';
import { IPayioChefConfigOperation } from '../interfaces';

export class PayioChefConfigOperationEntity implements IPayioChefConfigOperation {
  public barcodeFormat: EBarcodeFormat = EBarcodeFormat.CODE_6_PRICE_6;
  public barcodeInitialFlag: string = '2';
  public bipOnPrint: boolean = true;
  public headerMessages: string[] = [];
  public listItems: string[] = [];
  public multiOrder: boolean = false;
  /**@deprecated
   * Use SCALE mode default
   */
  public operationMode: EPayioChefOperationMode = EPayioChefOperationMode.SCALE;
  public printFormat: 'simple' | 'tabular' = 'simple';
  public showBarCode: boolean = true;
  public showNetWeight: boolean = true;
  public showOrderNumber: boolean = true;
  public showPricePerKg: boolean = true;
  public showTotalPrice: boolean = true;
  public startOrderIn: number = 1;
  public tabFormat: string | null = '';
  public tabMode: EPayioChefTabMode = EPayioChefTabMode.MANUAL;
  public tabRegistered: boolean = false;
  public urlLogo: string = '';
  public visionDeviceId: string = '';

  constructor(data?: Partial<PayioChefConfigOperationEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
