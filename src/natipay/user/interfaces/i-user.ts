import { IUser } from '../../../users';

export interface INatipayUser extends IUser {
  currentCompanyId: string | null;
  currentCompanyName: string | null;
  currentContainerId?: string | null;
  currentContainerName?: string | null;
}
