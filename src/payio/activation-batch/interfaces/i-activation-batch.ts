import { EPayioLicenseType } from '../../activation-key/enums/license-type.enum';
import { EPayioActivationBatchStatus } from '../enums/activation-batch-status.enum';

export interface IPayioActivationBatch {
  /** Prazo em dias para ativar as licenças (a partir da criação do lote) */
  activationDeadlineDays: number;

  /** Quantidade de licenças ativas */
  activeLicenses: number;

  // === INFORMAÇÕES DO APLICATIVO ===
  /** ID do aplicativo que será ativado */
  appId: string;

  /** Nome do aplicativo (para facilitar consultas) */
  appName: string;

  /** Slug do aplicativo */
  appSlug: string;

  // === CONTROLE E ESTOQUE DE LICENÇAS ===
  /** Quantidade de licenças ativadas */
  availableLicenses: number;

  /** Número sequencial do lote (ex: "2025/001", "2025/002") */
  batchNumber: string;

  // === CONTROLE DE TEMPO ===
  /** Data de criação do lote */
  createdAt: Date;

  // === AUDITORIA ===
  /** ID do admin que criou o lote */
  createdBy: string;

  // === INFORMAÇÕES DO DISTRIBUIDOR ===
  /** ID do distribuidor que receberá as licenças */
  distributorId: string;

  /** Nome do distribuidor (para facilitar consultas) */
  distributorName: string;

  /** Quantidade de licenças expiradas */
  expiredLicenses: number;

  /** Dias de tolerância após expiração */
  gracePeriodDays: number;

  /** Identificador único do lote (UUID) */
  id: string;

  // === CONFIGURAÇÕES DE LICENÇA ===
  /** Tipo de licença que será gerada neste lote */
  licenseType: EPayioLicenseType;

  /** Logs de operações do lote */
  logs: string[];

  /** Preço total negociado com o distribuidor */
  negotiatedPrice: number;

  // === METADADOS ===
  /** Observações ou notas sobre o lote */
  notes?: string;

  /** Quantidade de licenças revogadas */
  revokedLicenses: number;

  /** Indica se é ambiente sandbox */
  sandbox: boolean;

  /** Número sequencial dentro do ano */
  sequentialNumber: number;

  /** Status atual do lote */
  status: EPayioActivationBatchStatus;

  /** Tags para busca e indexação */
  tags: string[];

  /** Quantidade total de licenças no lote */
  totalLicenses: number;

  // === INFORMAÇÕES COMERCIAIS ===
  /** Preço unitário por licença */
  unitPrice: number;

  /** Data da última atualização */
  updatedAt: Date;

  // === CONFIGURAÇÕES DE LICENÇA ===
  /** Tipo de licença que será gerada neste lote */

  /** Período de validade da licença do tipo trial em dias (para definição comercial) */
  validityTrialPeriodDays: number;

  /** Versão ou intervalo de versões do software cobertas */
  versionConstraint: string[];

  /** Ano de referência do lote */
  year: number;
}
