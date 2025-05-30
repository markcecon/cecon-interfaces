import { IPayioCatalogPizzaCrust } from './i-catalog-pizza-crust';
import { IPayioCatalogPizzaEdge } from './i-catalog-pizza-edge';
import { IPayioCatalogPizzaSize } from './i-catalog-pizza-size';
import { IPayioCatalogPizzaTopping } from './i-catalog-pizza-topping';
import { IPayioCatalogShift } from './i-catalog-shift';

export interface IPayioCatalogPizza {
  createdAt: Date;
  crusts: IPayioCatalogPizzaCrust[];
  edges: IPayioCatalogPizzaEdge[];
  id: string;
  ifoodId: string | null;
  catalogId: string;
  categoryId: string;
  shifts: IPayioCatalogShift[];
  sizes: IPayioCatalogPizzaSize[];
  toppings: IPayioCatalogPizzaTopping[];
  updatedAt: Date;
}
