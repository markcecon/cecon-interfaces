export interface IEnvelopeArray<T> {
  actives?: number;
  items: T[];
  itemsTotal: number;
  lastId?: string;
  limit: number;
  offSet: number;
  total: number;
}
