import { EDocType, EGender, IAddress } from '../../../general';
import { IPayioConsumer } from '../interfaces/i-consumer';

export class PayioConsumerEntity implements IPayioConsumer {
  public active: boolean = false;
  public address: IAddress | null = null;
  public birthDate: Date | null = null;
  public createdAt: Date = new Date();
  public docNumber: string = '';
  public docType: EDocType = EDocType.CPF;
  public email: string = '';
  public gender: EGender = EGender.NOT_INFORMED;
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '';
  public name: string = '';
  public phoneNumber: string = '';
  public sandbox: boolean = false;
  public tags: string[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioConsumerEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
