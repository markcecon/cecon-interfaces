export interface INpKycDocument {
  id: number;
  user_id: number;
  document_type: 'rg' | 'cnh' | 'selfie' | 'comprovante_residencia';
  document_url: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  submitted_at: string; // YYYY-MM-DD HH:mm:ss
}
