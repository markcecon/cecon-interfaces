import { IMercadoPagoQRItem, IMercadoPagoQRItemCamelCase } from './i-mercado-pago-qr-item';
import { IMercadoPagoQRPayer } from './i-mercado-pago-qr-payer';
import { IMercadoPagoQRPaymentMethod, IMercadoPagoQRPaymentMethodCamelCase } from './i-mercado-pago-qr-payment-method';

export interface IMercadoPagoQR {
  amount: number;
  back_urls: Record<string, unknown>;
  client_id: number;
  collector: Record<string, unknown>;
  collector_id: number;
  external_reference: string;
  id: string;
  internal_metadata: Record<string, unknown>;
  items: IMercadoPagoQRItem[];
  marketplace: string;
  marketplace_fee: number;
  notification_url: string;
  operation_type: string;
  payer: IMercadoPagoQRPayer;
  payment_methods: IMercadoPagoQRPaymentMethod;
  processing_modes: Array<Record<string, unknown>>;
  site_id: string;
  sponsor_id: number;
  total_amount: number;
}

export interface IMercadoPagoQRCamelCase {
  amount: number;
  backUrls: Record<string, unknown>;
  clientId: number;
  collector: Record<string, unknown>;
  collectorId: number;
  externalReference: string;
  id: string;
  internalMetadata: Record<string, unknown>;
  items: IMercadoPagoQRItemCamelCase[];
  marketplace: string;
  marketplaceFee: number;
  notificationUrl: string;
  operationType: string;
  payer: IMercadoPagoQRPayer;
  paymentMethods: IMercadoPagoQRPaymentMethodCamelCase;
  processingModes: Array<Record<string, unknown>>;
  siteId: string;
  sponsorId: number;
  totalAmount: number;
}
