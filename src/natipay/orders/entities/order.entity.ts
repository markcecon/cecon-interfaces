import { EFrom } from '../../../general';
import {
  IOrderAdditionalFee,
  IOrderBenefits,
  IOrderCancellation,
  IOrderCustomer,
  IOrderItem,
  IOrderPayment,
  OrderTotalEntity,
} from '../../../order';
import { ENatipayOrderStatus } from '../enums';
import { INatipayOrder } from '../interfaces/i-order';

export class NatipayOrderEntity implements INatipayOrder {
  public additionalFees: IOrderAdditionalFee[] = [];
  public benefits: IOrderBenefits[] = [];
  public cancellation: IOrderCancellation | null = null;
  public companyId: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public customer: IOrderCustomer | null = null;
  public displayId: string = '';
  public from: EFrom = EFrom.NATIPAY;
  public id: string = '';
  public invoiceId: string | null = null;
  public items: IOrderItem[] = [];
  public payments: IOrderPayment | null = null;
  public preferenceId: string = '';
  public reference: string | null = null;
  public salesChannel: string = '';
  public sandbox: boolean = false;
  public status: ENatipayOrderStatus = ENatipayOrderStatus.PLACED;
  public total: OrderTotalEntity = new OrderTotalEntity();
  public updatedAt: Date = new Date();
  public version: string = '';

  constructor(data?: Partial<NatipayOrderEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
