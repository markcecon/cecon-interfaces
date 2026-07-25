import { IEnvelopeArray } from "./i-envelope-array";

// Creates an envelope containing an array of items with pagination support
export function factoryEnvelopeArrayPagination<T>(
  items: T[],
  offSet: number,
  limit: number,
  total?: number,
  lastId?: string
): IEnvelopeArray<T> {
  const data: IEnvelopeArray<T> = {
    offSet,
    limit,
    itemsTotal: items.length,
    total: total || items.length,
    items,
    lastId: lastId,
  };
  return data; // Consider returning a frozen copy for immutability
}
