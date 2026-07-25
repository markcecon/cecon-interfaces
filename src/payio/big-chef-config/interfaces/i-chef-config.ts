import { IPayioWebhook } from '../../chef-config';
import { IPayioBigChefConfigOperation } from './i-chef-config-operation';
import { IPayioBigChefConfigPrinter } from './i-chef-config-printer';
import { IPayioBigChefConfigScale } from './i-chef-config-scale';

export interface IPayioBigChefConfig {
  // #region Properties (9)

  createdAt: Date;
  id: string;
  name: string;
  operation: IPayioBigChefConfigOperation;
  printer: IPayioBigChefConfigPrinter | null;
  scale: IPayioBigChefConfigScale;
  updatedAt: Date;
  webhook: IPayioWebhook[];

  // #endregion Properties (9)
}
