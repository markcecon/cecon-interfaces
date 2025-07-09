import { EPayioActivationKeyStatus } from '../../activation-key/enums/activation-key-status.enum';

export interface IPayioJwtPayloadDevice {
  activationKey: string | null;
  activationKeyId: string | null;
  activationStatus: EPayioActivationKeyStatus;
  chefConfigId: string | null;
  id: string;
  name: string | null;
  scheduleId: string | null;
}
