import { IInfo, IPixKey } from '../../general';
import { EPixValidation, EWithdrawRecurrenceInterval, EWithdrawStatus, EWithdrawType } from '../enums';

export interface IWithdrawRequest {
  amount: number;
  cancelledAt: Date | null;
  cancelledReason: string | null;
  completedAt: Date | null;
  createdAt: Date;
  data: string | null;
  failedAt: Date | null;
  failedReason: string | null;
  id: string;

  /**
   * Indica se o saque é recorrente, ou seja, será realizado sempre o mesmo saque na mesma data (ex: mensal).
   */
  isRecurring?: boolean;
  liveMode: boolean;
  name: string;
  natiInfo: IInfo;
  pixKey: IPixKey | null;
  pixValidation: EPixValidation;

  /**
   * Intervalo de recorrência do saque (diário, semanal, quinzenal ou mensal).
   * Obrigatório quando isRecurring for true.
   */
  recurrenceInterval?: EWithdrawRecurrenceInterval;
  recurrenceEndAt?: Date | null;
  recurrenceDay?: Date | null;
  status: EWithdrawStatus;
  transactionId: string | null;
  transferDocumentUrl: string | null;
  type: EWithdrawType; // campo enum indicando o tipo do saque
  updatedAt: Date;
  withdrawAt: Date; // data do saque, diferente do createdAt, para indicar quando o saque foi executado
}
