import { IDesenfilaInfo, IInfo, IMobyoInfo } from "../../general";
import { EWithdrawRequestStatus } from "../enums";

export interface IWithdrawRequest {
  amount: number;
  approvedAt: Date | null;
  createdAt: Date;
  desenfilaInfo: IDesenfilaInfo;
  id: string;
  liveMode: boolean;
  mobyoInfo: IMobyoInfo;
  name: string;
  natiInfo: IInfo;
  pixKey: string | null;
  refusalReason: string | null;
  rejectedAt: Date | null;
  status: EWithdrawRequestStatus;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  updatedAt: Date;
}
