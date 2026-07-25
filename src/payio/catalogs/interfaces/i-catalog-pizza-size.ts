import { EPayioCatalogStatus } from '../enums';

export interface IPayioCatalogPizzaSize {
  acceptedFractions: number[];
  externalCode: string;
  id: string;
  name: string;
  sequence: number;
  index: number;
  slices: number;
  status: EPayioCatalogStatus;
}
