export interface IGlobalSettingFirebank {
  active: boolean;
  apiKey: string;
  baseUrl: string;
  basicAuth64: string;
  id: string;
  password: string;
  userName: string;
  fee: number;
  feeMode: 'PERCENTAGE' | 'FIXED';
}
