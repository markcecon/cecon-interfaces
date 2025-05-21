import { EPayioCatalogStatus } from '../enums';

export interface IPayioCatalogOption {
  description: string;
  externalCode: string;
  id: string;
  imagePath: string;
  index: number;
  name: string;
  price: {
    value: number;
  };
  productId: string;
  sequence: number;
  status: EPayioCatalogStatus;
}
