import { NatipayMemberTypeEnum } from "../../natipay";
import { PayioUserTypeEnum } from "../enums";
import { IUser } from "../interfaces";

export class UserEntity implements IUser {
  public accessCount: number = 0;
  public active: boolean = true;
  public createdAt: Date = new Date();
  public email: string | null = null;
  public id: string = '';
  public imageUrl: string | null = null;
  public internationalCode: string = '55';
  public lastAccessAt: Date = new Date();
  public name: string = '';
  public phoneNumber: string = '';
  public tags: string[] = [];
  public type: PayioUserTypeEnum | NatipayMemberTypeEnum = PayioUserTypeEnum.NONE;
  public updatedAt: Date = new Date();

  constructor(data?: Partial<UserEntity>) {
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
