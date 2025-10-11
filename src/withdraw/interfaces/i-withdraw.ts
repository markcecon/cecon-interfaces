import { IInfo, IPixKey } from "../../general";
import { EPixValidation, EWithdrawStatus, EWithdrawType } from "../enums";

export interface IWithdrawRequest {
  amount: number;
  approvedAt: Date | null;
  createdAt: Date;
  data: string | null;
  id: string;
  liveMode: boolean;
  name: string;
  natiInfo: IInfo;
  pixKey: IPixKey | null;
  pixValidation: EPixValidation;
  refusalReason: string | null;
  refusedAt: Date | null;
  status: EWithdrawStatus;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  type: EWithdrawType; // campo enum indicando o tipo do saque
  updatedAt: Date;
  withdrawAt: Date; // data do saque, diferente do createdAt, para indicar quando o saque foi executado
}
