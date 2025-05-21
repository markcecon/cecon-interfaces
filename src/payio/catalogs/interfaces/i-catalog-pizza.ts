import { EPayioCatalogStatus } from '../enums';
import { IPayioCatalogOptionGroup } from './i-catalog-option-group';
import { IPayioCatalogPizzaCrust } from './i-catalog-pizza-crust';
import { IPayioCatalogPizzaEdge } from './i-catalog-pizza-edge';
import { IPayioCatalogPizzaSize } from './i-catalog-pizza-size';
import { IPayioCatalogPizzaTopping } from './i-catalog-pizza-topping';
import { IPayioCatalogShift } from './i-catalog-shift';

export interface IPayioCatalogPizza {
  id: string;
  toppings: IPayioCatalogPizzaTopping[];
  crusts: IPayioCatalogPizzaCrust[];
  edges: IPayioCatalogPizzaEdge[];
  sizes: IPayioCatalogPizzaSize[];
  shifts: IPayioCatalogShift[];
}
