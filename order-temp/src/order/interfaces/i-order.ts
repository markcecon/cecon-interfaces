import { EFrom } from "../../general";
import { EOrderExtraInfo, EOrderTiming } from "../enums";
import { EOrderStatus } from "../enums/order-status.enum";
import { EOrderType } from "../enums/order-type.enum";
import { IOrderAdditionalFee } from "./i-additional-fee";
import { IOrderBenefits } from "./i-benefits";
import { IOrderCancellation } from "./i-cancellation";
import { IOrderCustomer } from "./i-customer";
import { IOrderDelivery } from "./i-delivery";
import { IOrderItem } from "./i-item";
import { IOrderPayment } from "./i-payment";
import { IOrderTotal } from "./i-total";

export interface IOrder {
  additionalFees: IOrderAdditionalFee[];
  benefits: IOrderBenefits[];
  cancellation: IOrderCancellation | null;
  companyId: string;
  containerId: string;
  createdAt: Date;
  customer: IOrderCustomer | null;
  delivery: IOrderDelivery | null;
  displayId: string;
  extraInfo: EOrderExtraInfo | string | null;
  from: EFrom;
  id: string;
  invoiceId: string | null;
  items: IOrderItem[];
  orderTiming: EOrderTiming;
  orderType: EOrderType | null;
  payments: IOrderPayment | null;
  reference: string | null;
  saleChannel: string;

  /**
   * @deprecated Use saleChannel instead
   */
  salesChannel?: string;
  sandbox: boolean;
  status: EOrderStatus;
  total: IOrderTotal;
  updatedAt: Date;
  version: string;
}
