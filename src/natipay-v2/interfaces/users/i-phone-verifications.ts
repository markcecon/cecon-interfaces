export interface INpPhoneVerification {
  id: number;
  user_id: number;
  code: string;
  expires_at: string; // YYYY-MM-DD HH:mm:ss
  verified_at: string | null; // YYYY-MM-DD HH:mm:ss
}
