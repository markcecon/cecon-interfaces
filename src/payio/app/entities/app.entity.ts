import { EPayuioAppSlug } from '../enums';
import { IPayioApp } from '../interfaces/i-app';

export class PayioAppEntity implements IPayioApp {
  public active: boolean = false;
  public clientKey: string | null = null;
  public clientSecret: string | null = null;
  public createdAt: Date = new Date();
  public description: string = '';
  public downloadUrl: string = '';
  public expiresAt: Date | null = null;
  public expiresIn: number | null = null;
  public id: string = '';
  public name: string = '';
  public price: number = 0;
  public refreshToken: string | null = null;
  public secret: string = '';
  public slug: EPayuioAppSlug = EPayuioAppSlug.none;
  public tags: string[] = [];
  public accessToken: string | null = null;
  public updatedAt: Date = new Date();
  public version: string = '0.0.1';

  constructor(data?: Partial<PayioAppEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
