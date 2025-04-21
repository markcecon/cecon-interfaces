export enum EMercadoPagoCallbackAction {
  PAYMENT_CREATED = 'payment.created',
  PAYMENT_UPDATED = 'payment.updated',
  PAYMENT_REFUNDED = 'payment.refunded',
  PAYMENT_CANCELLED = 'payment.cancelled',
  CHARGEBACK_CREATED = 'chargeback.created',
  SUBSCRIPTION_CREATED = 'subscription.created',
  SUBSCRIPTION_UPDATED = 'subscription.updated',
  PLAN_CREATED = 'plan.created',
  PLAN_UPDATED = 'plan.updated',
}
