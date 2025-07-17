import { IPayioCardInfo } from "../interfaces";

export class PayioCardInfoEntity implements IPayioCardInfo {
  public companyId: string = '';
  public containerId: string = '';

  constructor(data?: Partial<PayioCardInfoEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
