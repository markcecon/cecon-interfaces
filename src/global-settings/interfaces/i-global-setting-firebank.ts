export interface IGlobalSettingFirebank {
  access_token: string;
  active: boolean;
  apiKey: string;
  baseUrl: string;
  basicAuth64: string;
  certificate: string;
  clientId: string;
  clientSecret: string;
  expires_in: number;
  fee: number;
  feeMode: 'PERCENTAGE' | 'FIXED';
  id: string;
  password: string;
  token_type: string;
  userName: string;
  withDrawScheduledTax: number;
  withDrawTax: number;

  /**
   * Intervalo em segundos (ou milissegundos, conforme implementação) que define o tempo mínimo entre saques automáticos.
   * Exemplo: 60 para 1 minuto, 3600 para 1 hora.
   */
  withdrawAutoInterval: number;
  withdrawAutoMaxAmount: number;
}
