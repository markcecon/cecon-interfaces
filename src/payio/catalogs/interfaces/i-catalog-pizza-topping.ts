import { EPayioCatalogStatus } from '../enums';

export interface IPayioCatalogPizzaTopping {
  description: string;
  dietaryRestrictions: string[];
  externalCode: string;
  id: string;
  image: string;
  imagePath: string;
  index: number;
  name: string;
  prices: {
    [key: string]: {
      value: number;
    };
  };
  sequence: number;
  status: EPayioCatalogStatus;
}
