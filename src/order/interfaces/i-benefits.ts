import { ISponsorshipValue } from '../../general/interfaces';
import { EVoucherTargetTypes } from '../../voucher';

export interface IOrderBenefits {
  // #region Properties (6)

  id: string;
  sponsorshipValues: ISponsorshipValue[];
  target: EVoucherTargetTypes;
  value: number;
  description: string;
  referenceId: string;
}
