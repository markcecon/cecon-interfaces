import { IOrder } from '../../../order';
import { EPayioAppSlug } from '../../app';
import { IPayioOrderIndoor } from './i-order-indoor';

export interface IPayioOrder extends IOrder {
  appId: string | null;
  appSlug: EPayioAppSlug;
  deviceId: string | null;
  indoor: IPayioOrderIndoor | null;
  resumeVersion: string;
}
