import {
  IMercadoPagoQR,
  IMercadoPagoQRCamelCase,
  IMercadoPagoQRItem,
  IMercadoPagoQRItemCamelCase,
  IMercadoPagoQRPayer,
} from '../../interfaces';
import { IMercadoPagoQRPaymentMethod, IMercadoPagoQRPaymentMethodCamelCase } from '../../interfaces/qr/i-mercado-pago-qr-payment-method';
import { MercadoPagoQRPayerEntity } from './mercado-pago-qr-payer.entity';
import { MercadoPagoQRPaymentMethodEntity, MercadoPagoQRPaymentMethodEntityCamelCase } from './mercado-pago-qr-payment-method.entity';

export class MercadoPagoQRCamelCaseEntity implements IMercadoPagoQRCamelCase {
  public amount: number = 0;
  public backUrls: Record<string, unknown> = {};
  public clientId: number = 0;
  public collector: Record<string, unknown> = {};
  public collectorId: number = 0;
  public externalReference: string = '';
  public id: string = '';
  public internalMetadata: Record<string, unknown> = {};
  public items: IMercadoPagoQRItemCamelCase[] = [];
  public marketplace: string = '';
  public marketplaceFee: number = 0;
  public notificationUrl: string = '';
  public operationType: string = '';
  public payer: IMercadoPagoQRPayer = new MercadoPagoQRPayerEntity();
  public paymentMethods: IMercadoPagoQRPaymentMethodCamelCase = new MercadoPagoQRPaymentMethodEntityCamelCase();
  public processingModes: Record<string, unknown>[] = [];
  public siteId: string = '';
  public sponsorId: number = 0;
  public totalAmount: number = 0;

  constructor(data?: Partial<MercadoPagoQRCamelCaseEntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export class MercadoPagoQREntity implements IMercadoPagoQR {
  public amount: number = 0;
  public back_urls: Record<string, unknown> = {};
  public client_id: number = 0;
  public collector: Record<string, unknown> = {};
  public collector_id: number = 0;
  public external_reference: string = '';
  public id: string = '';
  public internal_metadata: Record<string, unknown> = {};
  public items: IMercadoPagoQRItem[] = [];
  public marketplace: string = '';
  public marketplace_fee: number = 0;
  public notification_url: string = '';
  public operation_type: string = '';
  public payer: IMercadoPagoQRPayer = new MercadoPagoQRPayerEntity();
  public payment_methods: IMercadoPagoQRPaymentMethod = new MercadoPagoQRPaymentMethodEntity();
  public processing_modes: Record<string, unknown>[] = [];
  public site_id: string = '';
  public sponsor_id: number = 0;
  public total_amount: number = 0;

  constructor(data?: Partial<MercadoPagoQREntity>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
