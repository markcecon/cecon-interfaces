import { EPayioCatalogStatus } from '../enums';

export interface IPayioCatalogPizzaEdge {
  id: string;
  index: number;
  name: string;
  price: {
    value: number;
  };
  sequence: number;
  status: EPayioCatalogStatus;
}
