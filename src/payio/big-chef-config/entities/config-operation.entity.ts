import { EBarcodeFormat, EPayioChefTabMode } from '../../chef-config';
import { IPayioBigChefConfigOperation } from '../interfaces';

export class PayioBigChefConfigOperationEntity implements IPayioBigChefConfigOperation {
  public tabBarcodeFormat: EBarcodeFormat = EBarcodeFormat.CODE_6_PRICE_6;
  public tabBarcodeInitialFlag: string = '2';
  public tabBipOnPrint: boolean = true;
  public tabHeaderMessages: string[] = [];
  public tabListItems: string[] = [];
  public tabPrintFormat: 'simple' | 'tabular' = 'simple';
  public tabShowBarCode: boolean = true;
  public tabShowNetWeight: boolean = true;
  public tabShowOrderNumber: boolean = true;
  public tabShowPricePerKg: boolean = true;
  public tabShowTotalPrice: boolean = true;
  public tabStartOrderIn: number = 1;
  public tabMode: EPayioChefTabMode = EPayioChefTabMode.MANUAL;
  public tabUrlLogo: string = '';
  public visionDeviceId: string = '';

  constructor(data?: Partial<PayioBigChefConfigOperationEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
