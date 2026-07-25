import { EPayioActivationKeyStatus } from '../../activation-key';

export interface IPayioJwtPayloadActivation {
  activationExpiresAt: Date | null;
  activationId: string | null;
  activationKey: string | null;
  activationStatus: EPayioActivationKeyStatus;
}
