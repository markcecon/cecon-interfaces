import { IMercadoPagoQRPaymentMethod, IMercadoPagoQRPaymentMethodCamelCase } from '../../interfaces/qr/i-mercado-pago-qr-payment-method';

export class MercadoPagoQRPaymentMethodEntity implements IMercadoPagoQRPaymentMethod {
  public excluded_payment_methods: Record<string, unknown>[] = [];
  public excluded_payment_types: { id: string }[] = [];

  constructor(data?: Partial<MercadoPagoQRPaymentMethodEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export class MercadoPagoQRPaymentMethodEntityCamelCase implements IMercadoPagoQRPaymentMethodCamelCase {
  public excludedPaymentMethods: Array<Record<string, unknown>> = [];
  public excludedPaymentTypes: Array<{ id: string }> = [];

  constructor(data?: Partial<MercadoPagoQRPaymentMethodEntityCamelCase>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
