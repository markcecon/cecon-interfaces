import { EPayioActivationKeyStatus } from '../enums/activation-key-status.enum';
import { EPayioLicenseType } from '../enums/license-type.enum';

export interface IPayioActivationKey {
  // === CAMPOS PREENCHIDOS NA ATIVAÇÃO ===
  // Data em que a chave foi ativada (null = não ativada)
  activatedAt: Date | null;

  // Permite múltiplas ativações trial
  allowMultipleTrialActivations: boolean;
  allowMultipleTrialCount: number;
  allowMultipleTrialLimit: number;
  amount: number; // Valor da licença (copiado do lote ou adicionado por superadmin)

  // === REFERÊNCIAS DO SISTEMA ===
  // ID do aplicativo (copiado do batch)
  appId: string;

  // Slug do aplicativo (copiado do batch)
  appSlug: string | null;

  // ID da empresa (preenchido na ativação)
  companyId: string | null;
  companyName: string | null;

  // === AUDITORIA ===
  // Data de criação da chave
  createdAt: Date;

  // data de expiração da chave
  expiredAt: Date | null;
  expiresAt: Date | null;

  // Dias de tolerância (copiado do batch)
  gracePeriodDays: number;

  // Identificador único da chave (UUID)
  id: string;

  // A chave de ativação em si (ex.: "PAYIO-XXXXX-XXXXX-XXXXX")
  key: string | null;

  // === DADOS COPIADOS DO LOTE (para performance) ===
  // Tipo de licença (copiado do batch)
  licenseType: EPayioLicenseType;

  // Logs de ativação
  logs: string[];

  // ID do dispositivo (preenchido na ativação)
  machineUid: string;

  // Metadados livres para suporte
  notes: string | null;

  // Pago em
  paidAt: Date | null;
  paymentId: string | null; // ID do pagamento associado à licença
  paymentMethod: string | null; // Método de pagamento utilizado na compra da licença
  revokedAt: Date | null;

  // Status da chave
  status: EPayioActivationKeyStatus;

  // Tags para categorização
  tags: string[];

  // Data de atualização da chave
  updatedAt: Date;
  periodDays: number;
}
