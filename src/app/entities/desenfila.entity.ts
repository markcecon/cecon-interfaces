import { EPixKeyType } from '../../general/enums';
import { IDesenfila, IDesenfilaFee } from '../interfaces';
import { DesenfilaConfigEntity } from './desenfila-config.entity';
import { DesenfilaTokenEntity } from './desenfila-token.entity';

export class DesenfilaEntity implements IDesenfila {
  public balance: number = 0;
  public blockedBalance: number = 0;
  public config: DesenfilaConfigEntity | null = null;
  public containerId: string = '';
  public doc: string = '';
  public docType: 'CPF' | 'CNPJ' = 'CPF';
  public fees: IDesenfilaFee[] = [];
  public goLive: boolean = false;
  public merchantId: string = '';
  public pixKey: string = '';
  public pixKeyType: EPixKeyType = EPixKeyType.RANDOM_KEY;
  public provider: 'FIREBANKING' | 'NATIPAY' = 'NATIPAY';
  public token: DesenfilaTokenEntity | null = null;

  constructor(data?: Partial<DesenfilaEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
