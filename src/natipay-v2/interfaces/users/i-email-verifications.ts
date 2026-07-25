export interface INpEmailVerification {
  id: number;
  user_id: number;
  verification_code: string;
  expires_at: string; // YYYY-MM-DD HH:mm:ss
  verified_at: string | null; // YYYY-MM-DD HH:mm:ss
}
