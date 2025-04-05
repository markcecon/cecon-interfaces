import { EFrom } from '../../../general';
import {
  IOrderAdditionalFee,
  IOrderBenefits,
  IOrderCancellation,
  IOrderCustomer,
  IOrderItem,
  IOrderPayment,
  IOrderTotal,
} from '../../../order';
import { ENatipayOrderStatus } from '../enums';

export interface INatipayOrder {
  additionalFees: IOrderAdditionalFee[];
  benefits: IOrderBenefits[];
  cancellation: IOrderCancellation | null;
  companyId: string;
  containerId: string;
  createdAt: Date;
  customer: IOrderCustomer | null;
  displayId: string;
  from: EFrom;
  id: string;
  invoiceId: string | null;
  items: IOrderItem[];
  payments: IOrderPayment | null;
  preferenceId: string;
  reference: string | null;
  salesChannel: string;
  sandbox: boolean;
  status: ENatipayOrderStatus;
  total: IOrderTotal;
  updatedAt: Date;
  version: string;
}
