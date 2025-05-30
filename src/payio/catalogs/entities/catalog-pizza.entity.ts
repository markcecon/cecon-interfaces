import { IPayioCatalogPizza } from "../interfaces";
import { PayioCatalogPizzaCrustEntity } from "./catalog-pizza-crust.entity";
import { PayioCatalogPizzaEdgeEntity } from "./catalog-pizza-edge.entity";
import { PayioCatalogPizzaSizeEntity } from "./catalog-pizza-size.entity";
import { PayioCatalogPizzaToppingEntity } from "./catalog-pizza-topping.entity";
import { PayioCatalogShiftEntity } from "./catalog-shift.entity";

export class PayioCatalogPizzaEntity implements IPayioCatalogPizza {
  public catalogId: string = '';
  public categoryId: string = '';
  public createdAt: Date = new Date();
  public crusts: PayioCatalogPizzaCrustEntity[] = [];
  public edges: PayioCatalogPizzaEdgeEntity[] = [];
  public id: string = '';
  public ifoodId: string | null = null;
  public shifts: PayioCatalogShiftEntity[] = [];
  public sizes: PayioCatalogPizzaSizeEntity[] = [];
  public toppings: PayioCatalogPizzaToppingEntity[] = [];
  public updatedAt: Date = new Date();

  constructor(data?: Partial<PayioCatalogPizzaEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
