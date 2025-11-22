export interface IPayioJwtPayloadMachine {
  id: string | null;
  name: string | null;
  uid: string | null;
  settings?: Record<string, string>;
}
