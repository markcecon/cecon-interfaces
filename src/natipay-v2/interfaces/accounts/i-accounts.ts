export interface INpAccount {
  id: number;
  user_id: number;
  account_number: string;
  agency_number: string;
  account_type: 'corrente' | 'poupanca' | 'pagamento';
  balance: string; // DECIMAL(18,2)
  status: 'ativa' | 'bloqueada' | 'pendente';
  created_at: string; // YYYY-MM-DD HH:mm:ss
}
