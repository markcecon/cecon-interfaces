import { EDocType, EGender, IAddress } from '../../../general';

export interface IPayioConsumer {
  active: boolean;
  address: IAddress | null;
  birthDate: Date | null;
  createdAt: Date;
  docNumber: string;
  docType: EDocType;
  email: string;
  gender: EGender;
  id: string;
  internationalCode: string;
  name: string;
  phoneNumber: string;
  imageUrl: string | null;
  sandbox: boolean;
  tags: string[];
  updatedAt: Date;
}
