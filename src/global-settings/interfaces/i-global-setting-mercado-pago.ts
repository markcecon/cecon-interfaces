export interface IGlobalSettingMercadoPago {
  accessToken: string;
  active: boolean;
  collectorId: string;
  expiresAt: Date | null;
  id: string;
  method: string | null;
  publicKey: string | null;
  refreshToken: string | null;
  renewAt: Date | null;
  storeId: string | null;
  clientSecret: string | null;
  clientId: string | null;
}
