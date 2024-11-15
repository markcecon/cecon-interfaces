import { DeveloperAppStatusEnum } from '../enums';
import { IDeveloperAppCredentials } from './i-developer-credentials';

export interface IDeveloperApp {
  // #region Properties (16)

  credentials: IDeveloperAppCredentials;
  description: string | null;
  developerId: string;
  developerName: string;
  developerSlug: string;
  homePageUrl: string | null;
  homologatedAt: Date | null;
  homologatedScopes: string[];
  id: string;
  imageUrl: string | null;
  logoUrl: string | null;
  name: string;
  /**
   * Reference para um appId external, como por exemplo o appId do NatiV2
   */
  reference: string | null;
  slug: string;
  softwareHouseName: string;
  status: DeveloperAppStatusEnum;

  // #endregion Properties (16)
}
