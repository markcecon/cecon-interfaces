import { DocTypeEnum } from '../../general';
import { InviteStatusEnum } from '../enums';
import { IInvite } from '../interfaces';

export class InviteEntity implements IInvite {
    // #region Properties (17)

    public companyId: string = '';
    public companyName: string = '';
    public containerId: string = '';
    public createdAt: Date = new Date();
    public doc: string = '';
    public docType: DocTypeEnum = DocTypeEnum.CNPJ;
    public email: string = '';
    public expireAt: Date = new Date(new Date().getTime() + 86400000);
    public expired: boolean = false;
    public id: string = '';
    public internationalCode: string = '+55';
    public name: string = '';
    public phoneNumber: string = '';
    public photoURL: string = '';
    public status: InviteStatusEnum = InviteStatusEnum.PENDING;
    public uid: string = '';
    public updatedAt: Date = new Date();

    // #endregion Properties (17)

    // #region Constructors (1)

    constructor(data?: Partial<InviteEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }

    // #endregion Constructors (1)
}
