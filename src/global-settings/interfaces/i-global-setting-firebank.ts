export interface IGlobalSettingFirebank {
  active: boolean;
  apiKey: string;
  clientId: string;
  clientSecret: string;
  baseUrl: string;
  basicAuth64: string;
  fee: number;
  feeMode: 'PERCENTAGE' | 'FIXED';
  id: string;
  password: string;
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
