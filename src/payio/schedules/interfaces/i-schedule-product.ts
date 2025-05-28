import { EPayioScheduleSkill } from '../enums';

export interface IPayioScheduleProduct {
  // #region Properties (11)

  code: string;
  description: string;
  /**
   * @deprecated
   * Preço fixo aplicado ao exceder o limite de peso
   */
  exceededWeightMessageText: string | null;
  /**
   * @deprecated
   * Limite de peso para enviar mensagem
   */
  exceededWeightPrice: number;
  skill: EPayioScheduleSkill;

  /**
   * @deprecated
   */
  helpYourSelf: boolean;
  /**
   * @deprecated
   */
  id: string;
  /**
   * Texto associado à mensagem sonora
   */
  price: number;
  unit: string;
  /**
   * @deprecated
   * Limite máximo de peso para aplicar regras
   */
  weightLimitMessage: number;
  /**
   * @deprecated
   * Preço fixo aplicado ao exceder o limite de peso
   */
  weightLimitPrice: number;

  // #endregion Properties (11)
}
