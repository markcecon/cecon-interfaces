import { EPayioLicenseType } from "../../activation-key/enums/license-type.enum";
import { EPayioActivationBatchStatus } from "../enums/activation-batch-status.enum";
import { IPayioActivationBatch } from "../interfaces/i-activation-batch";

export class PayioActivationBatchEntity implements IPayioActivationBatch {
  /** Prazo em dias para ativar as licenças (a partir da criação do lote) */
  public activationDeadlineDays: number = 180; // 6 meses;

  /** Quantidade de licenças ativas */
  public activeLicenses: number = 0;

  // === INFORMAÇÕES DO APLICATIVO ===
  /** ID do aplicativo que será ativado */
  public appId: string = '';

  /** Nome do aplicativo (para facilitar consultas) */
  public appName: string = '';

  /** Slug do aplicativo */
  public appSlug: string = '';

  /** Quantidade de licenças ativadas */
  public availableLicenses: number = 0;

  /** Número sequencial do lote (ex: "2025/001", "2025/002") */
  public batchNumber: string = '';

  // === CONTROLE DE TEMPO ===
  /** Data de criação do lote */
  public createdAt: Date = new Date();

  // === AUDITORIA ===
  /** ID do admin que criou o lote */
  public createdBy: string = '';

  // === INFORMAÇÕES DO DISTRIBUIDOR ===
  /** ID do distribuidor que receberá as licenças */
  public distributorId: string = '';

  /** Nome do distribuidor (para facilitar consultas) */
  public distributorName: string = '';

  /** Quantidade de licenças expiradas */
  public expiredLicenses: number = 0;

  /** Dias de tolerância após expiração */
  public gracePeriodDays: number = 0;
  public id: string = '';

  // === CONFIGURAÇÕES DE LICENÇA ===
  /** Tipo de licença que será gerada neste lote */
  public licenseType: EPayioLicenseType = EPayioLicenseType.SUBSCRIPTION;

  /** Logs de operações do lote */
  public logs: string[] = [];

  /** Preço total negociado com o distribuidor */
  public negotiatedPrice: number = 0;

  // === METADADOS ===
  /** Observações ou notas sobre o lote */
  public notes?: string;

  /** Quantidade de licenças revogadas */
  public revokedLicenses: number = 0;

  /** Indica se é ambiente sandbox */
  public sandbox: boolean = false;

  /** Número sequencial dentro do ano */
  public sequentialNumber: number = 0;

  /** Status atual do lote */
  public status: EPayioActivationBatchStatus = EPayioActivationBatchStatus.PROCESSING;

  /** Tags para busca e indexação */
  public tags: string[] = [];

  // === CONTROLE E ESTOQUE DE LICENÇAS ===
  /** Quantidade total de licenças no lote */
  public totalLicenses: number = 0;

  // === INFORMAÇÕES COMERCIAIS ===
  /** Preço unitário por licença */
  public unitPrice: number = 0;

  /** Data da última atualização */
  public updatedAt: Date = new Date();

  /** Período de validade da licença em meses (para definição comercial) */
  public validityPeriodMonths: number = 12;

  /** Período de validade da licença do tipo trial em dias (para definição comercial) */
  public validityTrialPeriodDays: number = 0;

  /** Versão ou intervalo de versões do software cobertas */
  public versionConstraint: string[] = [];

  /** Ano de referência do lote */
  public year: number = new Date().getFullYear();

  constructor(data?: Partial<PayioActivationBatchEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
