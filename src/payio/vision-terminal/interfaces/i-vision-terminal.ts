export interface IPayioVisionTerminal {
  createdAt: Date;
  deviceId: string;
  function: string;
  hook: string | null;
  hookAuthorization: string | null;
  id: number;
  ipAddress: string;
  name: string;
  password: string;
  session: string | null;
  type: string;
  updatedAt: Date;
  username: string;
}
