import { EAmountMode } from '../../../general';
import { EPayioTransactionType } from '../enums';
import { IPayioCardTransaction, IPayioCardTransactionPayment } from '../interfaces';

export class PayioCardTransactionEntity implements IPayioCardTransaction {
  public active: boolean = false;
  public afterBalance: number = 0;
  public beforeBalance: number = 0;
  public cardId: string = '';
  public createdAt: Date = new Date();
  public discountAmount: number = 0;
  public discountAmountType: EAmountMode = EAmountMode.FIXED;
  public externalReference: string = '';
  public finalCompanyId: string = '';
  public finalContainerId: string | null = null;
  public id: string = '';
  public metadata?: string | null | undefined;
  public paymentTransaction: IPayioCardTransactionPayment = {} as IPayioCardTransactionPayment;
  public sandbox: boolean = false;
  public tags: string[] = [];
  public type: EPayioTransactionType = EPayioTransactionType.PAYMENT;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCardTransactionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
