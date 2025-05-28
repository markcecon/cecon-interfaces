import { IOrder } from '../../../order';
import { EPayuioAppSlug } from '../../app';
import { IPayioOrderIndoor } from './i-order-indoor';

export interface IPayioOrder extends IOrder {
  appId: string | null;
  appSlug: EPayuioAppSlug;
  deviceId: string | null;
  indoor: IPayioOrderIndoor | null;
  resumeVersion: string;
}
