import { INatipayJwtPayloadApp } from '../interfaces/i-payload-app';

export class NatipayJwtPayloadAppEntity implements INatipayJwtPayloadApp {
  public developerId: string | null = null;
  public id: string = '';
  public name: string | null = null;
  public slug: string = '';

  constructor(data?: Partial<NatipayJwtPayloadAppEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
