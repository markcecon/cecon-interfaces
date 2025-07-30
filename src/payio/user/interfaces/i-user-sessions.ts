export interface IPayioUserSession {
  companyId: string | null;
  companyName: string | null;
  deviceId: string;
  appId:string ;
  lastAccessAt: Date;
}
