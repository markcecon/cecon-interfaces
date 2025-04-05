export interface IMercadoPagoQRPaymentMethod {
  excluded_payment_methods: Array<Record<string, unknown>>;
  excluded_payment_types: Array<{
    id: string;
  }>;
}

export interface IMercadoPagoQRPaymentMethodCamelCase {
  excludedPaymentMethods: Array<Record<string, unknown>>;
  excludedPaymentTypes: Array<{
    id: string;
  }>;
}
