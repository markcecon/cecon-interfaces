import { EZeEvent } from '../enums/event.enum';

export interface IPayioZeConfig {
  // #region Properties (9)

  autoAccept: boolean;
  soundAlert: boolean;
  webhook: string[];
  events: EZeEvent[];
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;

  // #endregion Properties (9)
}
