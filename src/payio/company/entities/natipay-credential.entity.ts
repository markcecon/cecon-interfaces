import { IPayioCompanyNatipayCredential } from '../interfaces/i-natipay-credential';

export class PayioCompanyNatipayCredentialEntity implements IPayioCompanyNatipayCredential {
  public accessToken: string = '';
  public expiresAt: Date = new Date();
  public expiresIn: number = 0;
  public refreshToken: string = '';
  public tokenType: string = '';

  constructor(data?: Partial<PayioCompanyNatipayCredentialEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
