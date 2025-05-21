import { EFrom } from '../../../general';
import { IOrderAdditionalFee, IOrderBenefits, IOrderCancellation, IOrderCustomer, IOrderPayment, IOrderTotal } from '../../../order';
import { ENatipayOrderStatus, ENatipaySaleChannel } from '../enums';
import { INatipayOrderItem } from './i-item';
import { INatipayMercadoPago } from './i-mercado-pago';

export interface INatipayOrder {
  additionalFees: IOrderAdditionalFee[];
  benefits: IOrderBenefits[];
  cancellation: IOrderCancellation | null;
  companyId: string;
  companyName: string;
  containerId: string;
  createdAt: Date;
  customer: IOrderCustomer | null;
  displayId: string;
  from: EFrom;
  id: string;
  invoiceId: string | null;
  items: INatipayOrderItem[];
  mercadoPago: INatipayMercadoPago | null;
  payments: IOrderPayment | null;
  reference: string;
  saleChannel: ENatipaySaleChannel;
  sandbox: boolean;
  status: ENatipayOrderStatus;
  total: IOrderTotal;
  transactionId: string | null;
  updatedAt: Date;
  version: string;
}
