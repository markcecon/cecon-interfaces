import { EPayioCatalogStatus } from '../enums';

export interface IPayioCatalogPizzaCrust {
  externalCode: string;
  id: string;
  index: number;
  name: string;
  price: {
    value: number;
  };
  sequence: number;
  status: EPayioCatalogStatus;
}
