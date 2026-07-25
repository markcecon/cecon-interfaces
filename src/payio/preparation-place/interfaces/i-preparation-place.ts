import { EPayioPreparationPlaceMode } from '../enums/mode.enum';

export interface IPayioPreparationPlace {
  createdAt: Date;
  id: string;
  mode: EPayioPreparationPlaceMode;
  name: string;
  notes: string;
  tags: string[];
  updatedAt: Date;
  url: string;
}
