import { EPayioActivationBatchStatus } from '../enums/activation-batch-status.enum';

export interface IPayioActivationBatch {
  /** Quantidade de licenças ativadas */
  activatedLicenses: number;

  /** ID do aplicativo que será ativado */
  appId: string;

  /** Nome do aplicativo (para facilitar consultas) */
  appName: string;

  /** Slug do aplicativo */
  appSlug: string;

  /** Número sequencial do lote (ex: "2025/001", "2025/002") */
  batchNumber: string;

  /** Data de criação do lote */
  createdAt: Date;

  /** ID do admin que criou o lote */
  createdBy: string;

  /** Nome do admin que criou */
  createdByName: string;

  /** ID do distribuidor que receberá as licenças */
  distributorId: string;

  /** Nome do distribuidor (para facilitar consultas) */
  distributorName: string;

  /** Quantidade de licenças já geradas */
  generatedLicenses: number;

  /** Identificador único do lote (UUID) */
  id: string;

  /** Logs de operações do lote */
  logs: string[];

  /** Preço total negociado com o distribuidor */
  negotiatedPrice: number;

  /** Observações ou notas sobre o lote */
  notes?: string;

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

  /** Preço unitário por licença */
  unitPrice: number;

  /** Data da última atualização */
  updatedAt: Date;

  /** Data limite para ativação das licenças */
  validUntil: Date;

  /** Ano de referência do lote */
  year: number;
}
