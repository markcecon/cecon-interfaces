export interface IGlobalSettingMercadoPago {
  accessCode: string;
  active: boolean;
  automationFee: number;
  collectorId: string;
  expiresAt: Date | null;
  fee: number | null;
  headers: Record<string, string> | null;
  id: string;
  method: string | null;
  mobyoFee: number;
  publicKey: string | null;
  tokenId: string | null;
  refreshToken: string | null;
  renewAt: Date | null;
  storeId: string | null;
  url: string | null;
}
