import { EPayuioActivationStatus } from '../enums/activation-key-status.enum';

export interface IPayioActivationKey {
  // #region Properties (20)

  // Data em que a chave foi usada (se já foi ativada)
  activationDate: Date | null;
  activationReleasedId: string;
  appId: string | null;
  appSlug: string | null;
  // A chave de ativação em si (ex.: "LIC-XXXXX-XXXXX-XXXXX")
  clientKey: string | null;
  companyId: string | null;
  companyName: string | null;
  // Data de criação do token
  createdAt: Date;
  // Data de geração da chave
  createdBy: string | null;
  // Data em que foi liberada para distribuição
  distributionDate: Date | null;
  // Quem liberou para distribuição
  distributedBy: string | null;
  sandbox: boolean;
  deviceId: string | null;
  // ID do distribuidor que adquiriu o pacote (se aplicável)
  distributorId: string | null;
  // Chave do distribuidor que gerou a chave (se aplicável)
  distributorKey: string | null;
  distributorName: string | null;
  // Data de expiração da chave
  expirationDate: Date | null;
  // Identificador único da chave (UUID)
  id: string;
  logs: string[];
  // Status da chave
  status: EPayuioActivationStatus;
  // Quantidade máxima de ativações permitidas para esta chave
  usageLimit: number;
  // Quantidade de vezes que a chave já foi usada
  usedCount: number;

  // #endregion Properties (20)
  // Usuário ou sistema que gerou a chave
}
