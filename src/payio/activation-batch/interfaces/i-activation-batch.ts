import { EPayioLicenseType } from '../../activation-key/enums/license-type.enum';
import { EPayioActivationBatchStatus } from '../enums/activation-batch-status.enum';

export interface IPayioActivationBatch {
  /** Identificador único do lote (UUID) */
  id: string;

  /** Número sequencial do lote (ex: "2025/001", "2025/002") */
  batchNumber: string;

  /** Ano de referência do lote */
  year: number;

  /** Número sequencial dentro do ano */
  sequentialNumber: number;

  /** Status atual do lote */
  status: EPayioActivationBatchStatus;

  // === CONFIGURAÇÕES DE LICENÇA ===
  /** Tipo de licença que será gerada neste lote */
  licenseType: EPayioLicenseType;

  /** Período de validade da licença em meses (para definição comercial) */
  validityPeriodMonths: number;

  /** Período de validade da licença do tipo trial em dias (para definição comercial) */
  validityTrialPeriodDays: number;

  /** Prazo em dias para ativar as licenças (a partir da criação do lote) */
  activationDeadlineDays: number;

  /** Dias de tolerância após expiração */
  gracePeriodDays: number;

  /** Versão ou intervalo de versões do software cobertas */
  versionConstraint: string[];

  // === INFORMAÇÕES DO APLICATIVO ===
  /** ID do aplicativo que será ativado */
  appId: string;

  /** Nome do aplicativo (para facilitar consultas) */
  appName: string;

  /** Slug do aplicativo */
  appSlug: string;

  // === INFORMAÇÕES DO DISTRIBUIDOR ===
  /** ID do distribuidor que receberá as licenças */
  distributorId: string;

  /** Nome do distribuidor (para facilitar consultas) */
  distributorName: string;

  // === CONTROLE E ESTOQUE DE LICENÇAS ===
  /** Quantidade de licenças ativadas */
  availableLicenses: number;
  /** Quantidade de licenças ativas */
  activeLicenses: number;
  /** Quantidade de licenças expiradas */
  expiredLicenses: number;
  /** Quantidade de licenças revogadas */
  revokedLicenses: number;
  /** Quantidade total de licenças no lote */
  totalLicenses: number;

  // === INFORMAÇÕES COMERCIAIS ===
  /** Preço unitário por licença */
  unitPrice: number;

  /** Preço total negociado com o distribuidor */
  negotiatedPrice: number;

  // === CONTROLE DE TEMPO ===
  /** Data de criação do lote */
  createdAt: Date;

  /** Data da última atualização */
  updatedAt: Date;

  // === AUDITORIA ===
  /** ID do admin que criou o lote */
  createdBy: string;

  /** Logs de operações do lote */
  logs: string[];

  // === METADADOS ===
  /** Observações ou notas sobre o lote */
  notes?: string;

  /** Indica se é ambiente sandbox */
  sandbox: boolean;

  /** Tags para busca e indexação */
  tags: string[];
}
