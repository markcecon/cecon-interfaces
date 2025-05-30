import { EBarcodeFormat } from '../../chef-config';
import { ETefProvider } from '../enums';
import { IPayioCashConfigOperation, IPayioCashConfigOperationTef } from '../interfaces/i-cash-config-operation';

export class PayioCashConfigOperationEntity implements IPayioCashConfigOperation {
  public barcodeFormat: EBarcodeFormat = EBarcodeFormat.CODE_6_PRICE_6;
  public tabFormat: string | null = null;
  public tef: IPayioCashConfigOperationTef = new PayioCashConfigOperationTefEntity();
  public pdvId: string = '';
  public visionDeviceId: string = '';
  constructor(data?: Partial<PayioCashConfigOperationEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class PayioCashConfigOperationTefEntity implements IPayioCashConfigOperationTef {
  public companyNumber: string = '';
  public provider: ETefProvider = ETefProvider.FISERV;
  public terminal: string = '';
  public tokenOtp: string = '';
  public tokenRegister: string = '';
  public url: string = '';
}
