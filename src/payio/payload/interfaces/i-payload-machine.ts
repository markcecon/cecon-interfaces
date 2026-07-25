export interface IPayioJwtPayloadMachine {
  id: number | null;
  name: string | null;
  uid: string | null;
  settings?: Record<string, string>;
}
