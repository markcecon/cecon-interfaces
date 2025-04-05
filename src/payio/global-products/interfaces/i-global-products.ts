export interface IPayioGlobalProduct {
  // #region Properties (16)

  active: boolean;
  avgPrice: number;
  brand: string;
  code: string;
  createdAt: Date;
  id: string;
  lastPrices: number[];
  maxPrice: number;
  ncm: string | null;
  cest: string | null;
  minPrice: number;
  name: string;
  quantityPackaging: number;
  tags: string[];
  thumbnail: string | null;
  unit: string;
  updatedAt: Date;
  weight: number;

  // #endregion Properties (16)
}
