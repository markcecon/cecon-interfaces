import { IFeeDetail } from '../../../transaction/interfaces';

// import { SetOrderItemV3Dto } from '../usercases-v3/set-item-v3/set-item-v3.dto';
export interface INatipayMercadoPago {
  preferenceId: string;
  amountPaid: number;
  feeDetails: IFeeDetail[];
  paymentId: string;
  paymentStatus: string;
}
