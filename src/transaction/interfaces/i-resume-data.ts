import { EOperationType } from "../..";

export interface ITransactionResumeData {
  amount: number;  
  date: Date;
  period: string; // formato AAAAMMDD
  operationType: EOperationType;
  reference: string;
}
