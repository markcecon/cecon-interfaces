import { PaymentChannelEnum } from '../enums/payment-channel.enum';
import { PaymentModeEnum } from '../enums/payment-mode.enum';
import { PaymentTypeEnum } from '../enums/payment-type.enum';

export interface IPaymentMethod {
    // #region Properties (13)

    active: boolean;
    channel: PaymentChannelEnum;
    createdAt: Date;
    fee: number;
    id: string;
    index: number;
    maxAmount: number;
    minAmount: number;
    mode: PaymentModeEnum;
    name: string;
    token: string;
    type: PaymentTypeEnum;
    updatedAt: Date;

    // #endregion Properties (13)
}
