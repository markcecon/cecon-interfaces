export interface INpUserV3 {
  id: number;
  full_name: string;
  cpf: string;
  email: string;
  phone_number: string | null;
  birth_date: string | null; // YYYY-MM-DD
  password_hash: string;
  created_at: string; // YYYY-MM-DD HH:mm:ss
}
