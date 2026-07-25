import {
  IGlobalSettingIfood,
  IGlobalSettingIfoodCredentials,
  IGlobalSettingIfoodProduction,
  IGlobalSettingIfoodSandbox,
} from '../interfaces';

export class GlobalSettingIfoodCredentialsEntity implements IGlobalSettingIfoodCredentials {
  public accessToken: string = '';
  public expiresIn: number = 0;
  public refreshToken: string = '';
  public type: 'Bearer' = 'Bearer';

  constructor(data?: Partial<GlobalSettingIfoodCredentialsEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class GlobalSettingIfoodEntity implements IGlobalSettingIfood {
  public active: boolean = false;
  public clientCredentials: GlobalSettingIfoodCredentialsEntity = new GlobalSettingIfoodCredentialsEntity();
  public createdAt: Date = new Date();
  public id: string = 'IFOOD';
  public production: GlobalSettingIfoodProductionEntity = new GlobalSettingIfoodProductionEntity();
  public sandbox: GlobalSettingIfoodSandboxEntity = new GlobalSettingIfoodSandboxEntity();
  public updatedAt: Date = new Date();

  constructor(data?: Partial<GlobalSettingIfoodEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class GlobalSettingIfoodProductionEntity implements IGlobalSettingIfoodProduction {
  public clientId: string = '';
  public clientSecret: string = '';

  constructor(data?: Partial<GlobalSettingIfoodProductionEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}

export class GlobalSettingIfoodSandboxEntity implements IGlobalSettingIfoodSandbox {
  public clientId: string = '';
  public clientSecret: string = '';

  constructor(data?: Partial<GlobalSettingIfoodSandboxEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
