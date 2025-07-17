import { EPayioActivationKeyStatus } from '../../activation-key/enums/activation-key-status.enum';

export interface IPayioJwtPayloadDevice {
  activationId: string | null;
  activationKey: string | null;
  activationStatus: EPayioActivationKeyStatus;
  chefConfigId: string | null;
  id: string;
  name: string | null;
  scheduleId: string | null;
}
