import { EPayioActivationKeyStatus } from '../enums/activation-key-status.enum';
import { EPayioLicenseType } from '../enums/license-type.enum';
import { IPayioActivationKey } from '../interfaces/i-activation-key';

export class PayioActivationKeyEntity implements IPayioActivationKey {
  // Identificador único da chave (UUID)
  public id: string = '';

  // A chave de ativação em si (ex.: "PAYIO-XXXXX-XXXXX-XXXXX")
  public key: string | null = null;

  // Status da chave
  public status: EPayioActivationKeyStatus = EPayioActivationKeyStatus.AVAILABLE;

  // === REFERÊNCIA AO LOTE (fonte das configurações) ===
  // ID do lote que gerou esta licença
  public batchId: string = '';

  // === DADOS COPIADOS DO LOTE (para performance) ===
  // Tipo de licença (copiado do batch)
  public licenseType: EPayioLicenseType = EPayioLicenseType.TRIAL;

  // Período de validade em meses (copiado do batch)
  public validityPeriodMonths: number = 12; // 1 ano;

  // Dias de tolerância (copiado do batch)
  public gracePeriodDays: number = 0;

  // Versão do software (copiado do batch)
  public versionConstraint: string[] = [];

  // === CAMPOS PREENCHIDOS NA ATIVAÇÃO ===
  // Data em que a chave foi ativada (null = não ativada)
  public activationDate: Date | null = null;

  // Hash da máquina que consumiu a licença
  public hardwareFingerprint: string | null = null;

  // === REFERÊNCIAS DO SISTEMA ===
  // ID do aplicativo (copiado do batch)
  public appId: string | null = null;

  // Slug do aplicativo (copiado do batch)
  public appSlug: string | null = null;

  // ID da empresa (preenchido na ativação)
  public companyId: string | null = null;

  // ID do dispositivo (preenchido na ativação)
  public deviceId: string | null = null;

  // === DADOS DE DISTRIBUIÇÃO (copiados do batch) ===
  // ID do distribuidor
  public distributorId: string = '';

  // Data em que o lote foi entregue
  public distributionDate: Date = new Date();

  // === AUDITORIA ===
  // Data de criação da chave
  public createdAt: Date = new Date();

  // Metadados livres para suporte
  public notes: string | null = null;

  // Tags para categorização
  public tags: string[] = [];

  constructor(data?: Partial<PayioActivationKeyEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
