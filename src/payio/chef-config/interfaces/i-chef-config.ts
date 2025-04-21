import { IPayioChefConfigOperation } from './i-chef-config-operation';
import { IPayioChefConfigPrinter } from './i-chef-config-printer';
import { IPayioChefConfigScale } from './i-chef-config-scale';
import { IPayioWebhook } from './i-webhook';

export interface IPayioChefConfig {
  // #region Properties (9)

  createdAt: Date;
  id: string;
  name: string;
  operation: IPayioChefConfigOperation;
  printer: IPayioChefConfigPrinter | null;
  scale: IPayioChefConfigScale;
  updatedAt: Date;
  webhook: IPayioWebhook[];

  // #endregion Properties (9)
}
