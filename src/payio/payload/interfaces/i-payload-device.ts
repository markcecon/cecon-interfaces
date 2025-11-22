import { EPayioActivationKeyStatus } from '../../activation-key';

/**
 * @deprecated Use IPayioJwtPayloadMachine instead
 */
export interface IPayioJwtPayloadDevice {
  activationId: string | null;
  activationKey: string | null;
  activationStatus: EPayioActivationKeyStatus;
  bigChefConfigId: string | null;
  cashConfigId: string | null;
  chefConfigId: string | null;
  id: string;
  name: string | null;
  scheduleId: string | null;
  smartConfigId: string | null;
}
