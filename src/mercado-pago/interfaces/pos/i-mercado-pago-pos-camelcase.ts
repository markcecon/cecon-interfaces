export interface IMercadoPagoPosCamelCase {
  id: number;
  qr: {
    image: string;
    templateDocument: string;
    templateImage: string;
  };
  status: string;
  dateCreated: string;
  dateLastUpdated: string;
  uuid: string;
  compatibleId: string;
  userId: number;
  name: string;
  fixedAmount: boolean;
  storeId: number;
  externalStoreId?: string;
  externalId: string;
  site: string;
  qrCode: string;
}
