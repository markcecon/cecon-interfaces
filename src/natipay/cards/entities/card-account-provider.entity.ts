import { ENatipayCardAccountProvider } from '../enums';
import { INatipayCardAccountProvider } from '../interfaces';

export class NatipayCardAccountProviderEntity implements INatipayCardAccountProvider {
  public reference: string = '';
  public type: ENatipayCardAccountProvider = ENatipayCardAccountProvider.NATIPAY;

  constructor(data?: Partial<NatipayCardAccountProviderEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
