import { IPayioChefConfigOperation } from './i-chef-config-operation';
import { IPayioChefConfigPrinter } from './i-chef-config-printer';
import { IPayioChefConfigScale } from './i-chef-config-scale';
import { IPayioChefConfigWebhook } from './i-chef-config-webhook';

export interface IPayioChefConfig {
  // #region Properties (9)

  createdAt: Date;
  id: string;
  name: string;
  operation: IPayioChefConfigOperation;
  printer: IPayioChefConfigPrinter | null;
  scale: IPayioChefConfigScale;
  updatedAt: Date;
  webhook: IPayioChefConfigWebhook[];

  // #endregion Properties (9)
}
