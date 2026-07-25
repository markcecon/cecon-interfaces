export interface INpAuditLog {
  id: number;
  user_id: number | null;
  action: string | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string; // YYYY-MM-DD HH:mm:ss
}
