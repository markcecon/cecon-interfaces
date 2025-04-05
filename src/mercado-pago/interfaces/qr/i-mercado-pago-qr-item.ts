export interface IMercadoPagoQRItem {
  currency_id: string;
  description: string;
  id: number;
  picture_url: string;
  quantity: number;
  title: string;
  unit_price: number;
}

export interface IMercadoPagoQRItemCamelCase {
  currencyId: string;
  description: string;
  id: number;
  pictureUrl: string;
  quantity: number;
  title: string;
  unitPrice: number;
}
