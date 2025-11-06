// src/models/base.entity.ts
import { EDocType, EPixKeyType } from '../enums';
import { IPixKey } from '../interfaces/i-pix-key';

export class PixKeyEntity implements IPixKey {
  public description: string = '';
  public doc: string = '';
  public docType: EDocType = EDocType.CPF;
  public isDefault: boolean = false;
  public key: string = '';
  public name: string = '';
  public type: EPixKeyType = EPixKeyType.CPF;

  constructor(data?: Partial<PixKeyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
