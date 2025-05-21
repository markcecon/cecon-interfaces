import { EFrom } from '../../../general';
import { IOrderAdditionalFee, IOrderBenefits, IOrderCancellation, IOrderCustomer, IOrderPayment, OrderTotalEntity } from '../../../order';
import { ENatipayOrderStatus, ENatipaySaleChannel } from '../enums';
import { INatipayOrder } from '../interfaces/i-order';
import { NatipayOrderItemEntity } from './item.entity';
import { NatipayMercadoPagoEntity } from './mercado-pago.entity';

export class NatipayOrderEntity implements INatipayOrder {
  public additionalFees: IOrderAdditionalFee[] = [];
  public benefits: IOrderBenefits[] = [];
  public cancellation: IOrderCancellation | null = null;
  public companyId: string = '';
  public companyName: string = '';
  public containerId: string = '';
  public createdAt: Date = new Date();
  public customer: IOrderCustomer | null = null;
  public displayId: string = '';
  public from: EFrom = EFrom.NATIPAY;
  public id: string = '';
  public invoiceId: string | null = null;
  public items: NatipayOrderItemEntity[] = [];
  public mercadoPago: NatipayMercadoPagoEntity | null = null;
  public payments: IOrderPayment | null = null;
  public reference: string = '';
  public saleChannel: ENatipaySaleChannel = ENatipaySaleChannel.NATI_PDV;
  public sandbox: boolean = false;
  public status: ENatipayOrderStatus = ENatipayOrderStatus.PLACED;
  public total: OrderTotalEntity = new OrderTotalEntity();
  public transactionId: string | null = null;
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
