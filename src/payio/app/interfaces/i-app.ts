import { EPayuioAppSlug } from '../enums';

export interface IPayioApp {
  active: boolean;
  clientKey: string | null;
  clientSecret: string | null;
  createdAt: Date;
  description: string;
  downloadUrl: string;
  expiresAt: Date | null;
  expiresIn: number | null;
  id: string;
  name: string;
  price: number;
  refreshToken: string | null;
  secret: string;
  slug: EPayuioAppSlug;
  tags: string[];
  accessToken: string | null;
  updatedAt: Date;
  version: string;
}
