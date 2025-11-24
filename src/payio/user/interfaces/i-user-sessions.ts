export interface IPayioUserSession {
  companyId: string | null;
  companyName: string | null;
  machineUid: string;
  appId: string;
  lastAccessAt: Date;
}
