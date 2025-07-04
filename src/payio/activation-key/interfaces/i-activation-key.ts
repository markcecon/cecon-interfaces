import { EPayioActivationKeyStatus } from '../enums/activation-key-status.enum';
import { EPayioLicenseType } from '../enums/license-type.enum';

export interface IPayioActivationKey {
  // Identificador único da chave (UUID)
  id: string;

  // A chave de ativação em si (ex.: "PAYIO-XXXXX-XXXXX-XXXXX")
  key: string | null;

  // Status da chave
  status: EPayioActivationKeyStatus;

  // === REFERÊNCIA AO LOTE (fonte das configurações) ===
  // ID do lote que gerou esta licença
  batchId: string;

  // === DADOS COPIADOS DO LOTE (para performance) ===
  // Tipo de licença (copiado do batch)
  licenseType: EPayioLicenseType;

  // Período de validade em meses (copiado do batch)
  validityPeriodMonths: number;

  // Dias de tolerância (copiado do batch)
  gracePeriodDays: number;

  // Versão do software (copiado do batch)
  versionConstraint: string[];

  // === CAMPOS PREENCHIDOS NA ATIVAÇÃO ===
  // Data em que a chave foi ativada (null = não ativada)
  activationDate: Date | null;

  // Hash da máquina que consumiu a licença
  hardwareFingerprint: string | null;

  // === REFERÊNCIAS DO SISTEMA ===
  // ID do aplicativo (copiado do batch)
  appId: string | null;

  // Slug do aplicativo (copiado do batch)
  appSlug: string | null;

  // ID da empresa (preenchido na ativação)
  companyId: string | null;

  // ID do dispositivo (preenchido na ativação)
  deviceId: string | null;

  // === DADOS DE DISTRIBUIÇÃO (copiados do batch) ===
  // ID do distribuidor
  distributorId: string;

  // Data em que o lote foi entregue
  distributionDate: Date;

  // === AUDITORIA ===
  // Data de criação da chave
  createdAt: Date;

  // Metadados livres para suporte
  notes: string | null;

  // Tags para categorização
  tags: string[];
}
