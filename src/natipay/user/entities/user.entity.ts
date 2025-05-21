import { UserEntity } from '../../../users';
import { INatipayUser } from '../interfaces/i-user';

export class NatipayUserEntity extends UserEntity implements INatipayUser {
  public currentCompanyId: string | null = null;
  public currentCompanyName: string | null = null;
  public currentContainerId?: string | null | undefined = null;
  public currentContainerName?: string | null | undefined = null;

  constructor(data?: Partial<NatipayUserEntity>) {
    super();
    if (data) {
      for (let key in data) {
        if (data.hasOwnProperty(key) && key in this) {
          (this as any)[key] = (data as any)[key];
        }
      }
    }
  }
}
