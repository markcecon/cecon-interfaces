export interface IGlobalSettingIfood {
  active: boolean;
  clientCredentials: IGlobalSettingIfoodCredentials;
  createdAt: Date;
  id: string;
  production: IGlobalSettingIfoodProduction;
  sandbox: IGlobalSettingIfoodSandbox;
  updatedAt: Date;
}

export interface IGlobalSettingIfoodCredentials {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  type: 'Bearer';
}

export interface IGlobalSettingIfoodProduction {
  clientId: string;
  clientSecret: string;
}

export interface IGlobalSettingIfoodSandbox {
  clientId: string;
  clientSecret: string;
}
