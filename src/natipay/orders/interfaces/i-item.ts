// import { SetOrderItemV3Dto } from '../usercases-v3/set-item-v3/set-item-v3.dto';
export interface INatipayOrderItem {
  externalCode: string;
  id: string;
  index: number;
  name: string;
  observations: string;
  picture: string;
  price: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  unit: string;
  unitPrice: number;
  weight: number;
}
