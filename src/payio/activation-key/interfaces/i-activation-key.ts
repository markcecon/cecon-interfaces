import { EPayioActivationKeyStatus } from '../enums/activation-key-status.enum';

export interface IPayioActivationKey {
  // Data em que a chave foi usada (se já foi ativada)
  activationDate: Date | null;
  appId: string | null;
  appSlug: string | null;
  batchId: string;
  companyId: string | null;
  companyName: string | null;

  // Data de criação do token
  createdAt: Date;

  // Data de geração da chave
  createdBy: string | null;
  deviceId: string | null;

  // Quem liberou para distribuição
  distributedBy: string | null;

  // Data em que foi liberada para distribuição
  distributionDate: Date | null;

  // ID do distribuidor que adquiriu o pacote (se aplicável)
  distributorId: string | null;

  // Chave do distribuidor que gerou a chave (se aplicável)
  distributorKey: string | null;
  distributorName: string | null;

  // Data de expiração da chave
  expirationDate: Date | null;

  // Identificador único da chave (UUID)
  id: string;

  // A chave de ativação em si (ex.: "PAYIO-XXXXX-XXXXX-XXXXX")
  key: string | null;
  logs: string[];
  // Campo aberto para colocar um nome de parceiro do distribuidor caso necessário
  partnerName: string | null;
  partnerReference: string | null;
  sandbox: boolean;

  // Status da chave
  status: EPayioActivationKeyStatus;
  tags: string[];
}
