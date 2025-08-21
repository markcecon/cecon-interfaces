import { EPayioActivationKeyStatus } from "../../activation-key/enums/activation-key-status.enum";

export interface IPayioJwtPayloadDevice {
  activationExpiresAt: Date | null;
  activationId: string | null;
  activationKey: string | null;
  activationStatus: EPayioActivationKeyStatus;
  bigChefConfigId: string | null;
  cashConfigId: string | null;
  chefConfigId: string | null;
  zeConfigId: string | null;
  id: string;
  name: string | null;
  scheduleId: string | null;
  smartConfigId: string | null;
}
