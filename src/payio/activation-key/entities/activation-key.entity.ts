import { EPayioActivationKeyStatus } from "../enums/activation-key-status.enum";
import { EPayioLicenseType } from "../enums/license-type.enum";
import { IPayioActivationKey } from "../interfaces/i-activation-key";

export class PayioActivationKeyEntity implements IPayioActivationKey {
  // === CAMPOS PREENCHIDOS NA ATIVAÇÃO ===
  // Data em que a chave foi ativada (null = não ativada)
  public activatedAt: Date | null = null;
  public allowMultipleTrialActivations: boolean = false;
  public allowMultipleTrialCount: number = 0;
  public allowMultipleTrialLimit: number = 0;
  public amount: number = 0; // Valor da licença (copiado do lote ou adicionado por superadmin)

  // === REFERÊNCIAS DO SISTEMA ===
  // ID do aplicativo (copiado do batch)
  public appId: string = '';

  // Slug do aplicativo (copiado do batch)
  public appSlug: string | null = null;

  // === REFERÊNCIA AO LOTE (fonte das configurações) ===
  // ID do lote que gerou esta licença
  public batchId: string = '';

  // ID da empresa (preenchido na ativação)
  public companyId: string | null = null;
  public companyName: string | null = null;

  // === AUDITORIA ===
  // Data de criação da chave
  public createdAt: Date = new Date();

  // === DADOS DE DISTRIBUIÇÃO (copiados do batch) ===
  // ID do distribuidor
  public distributorId: string = '';
  public distributorName: string = '';
  public expiresAt: Date | null = null;

  // Dias de tolerância (copiado do batch)
  public gracePeriodDays: number = 0;

  // Hash da máquina que consumiu a licença
  public hardwareFingerprint: string | null = null;

  // Identificador único da chave (UUID)
  public id: string = '';

  // data da instalaçao do dispositivo
  public installationAt: Date | null = null;

  // A chave de ativação em si (ex.: "PAYIO-XXXXX-XXXXX-XXXXX")
  public key: string | null = null;

  // === DADOS COPIADOS DO LOTE (para performance) ===
  // Tipo de licença (copiado do batch)
  public licenseType: EPayioLicenseType = EPayioLicenseType.TRIAL;
  public logs: string[] = [];

  // ID do dispositivo (preenchido na ativação)
  public machineUid: string = '';

  // Metadados livres para suporte
  public notes: string | null = null;
  public paidAt: Date | null = null;
  public paymentId: string | null = null;
  public paymentMethod: string | null = null;
  public revokedAt: Date | null = null;

  // Status da chave
  public status: EPayioActivationKeyStatus = EPayioActivationKeyStatus.AVAILABLE;

  // Tags para categorização
  public tags: string[] = [];
  public updatedAt: Date = new Date();
  public validityTrialPeriodDays: number = 15; // 15 dias;

  // Versão do software (copiado do batch)
  public versionConstraint: string[] = [];

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
