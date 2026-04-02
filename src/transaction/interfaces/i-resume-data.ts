import { EOperationType } from '../..';

export interface ITransactionResumeData {
  amount: number; // valor da operação (pode ser negativo para saques)
  amountDay: number; // acumulado do mês até este dia
  amountMonth: number; // acumulado do mês até este dia
  amountYear: number; // acumulado do ano até este dia
  countDay: number; // quantidade acumulada do dia
  countMonth: number; // quantidade acumulada do mês
  countYear: number; // quantidade acumulada do ano
  date: Date;
  operationType: EOperationType;
  period: string; // formato AAAAMMDD (identifica dia, embutindo mês e ano)
  periodMonth: string; // formato AAAAMM (otimizado para busca por mês no Firebase)
  periodYear: string; // formato AAAA (otimizado para busca por ano no Firebase)
  reference: string;
}
