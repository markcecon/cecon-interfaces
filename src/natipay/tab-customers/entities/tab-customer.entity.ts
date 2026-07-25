import { EDocType } from '../../../general';
import { INatipayAddress } from '../../company';
import { ETabBillingCycle } from '../enums/tab-billing-cycle.enum';
import {
    ITabCustomer,
    ITabCustomerCallback,
    ITabCustomerItemDiscount,
    ITabCustomerNotificationChannelPreferences,
    ITabCustomerNotificationPreferences,
} from '../interfaces/i-tab-customer';

export class TabCustomerNotificationChannelPreferencesEntity implements ITabCustomerNotificationChannelPreferences {
    public newSale: boolean = true;
    public payment: boolean = true;
    public dueDate: boolean = true;

    constructor(data?: Partial<TabCustomerNotificationChannelPreferencesEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}

export class TabCustomerNotificationPreferencesEntity implements ITabCustomerNotificationPreferences {
    public whatsapp: ITabCustomerNotificationChannelPreferences = new TabCustomerNotificationChannelPreferencesEntity();
    public email: ITabCustomerNotificationChannelPreferences = new TabCustomerNotificationChannelPreferencesEntity({
        newSale: false,
        payment: false,
        dueDate: false,
    });

    constructor(data?: Partial<TabCustomerNotificationPreferencesEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}

export class TabCustomerItemDiscountEntity implements ITabCustomerItemDiscount {
    public productId: number = 0;
    public discountPercent: number | null = null;
    public discountAmount: number | null = null;
    public surchargePercent: number | null = null;
    public surchargeAmount: number | null = null;

    constructor(data?: Partial<TabCustomerItemDiscountEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}

export class TabCustomerEntity implements ITabCustomer {
    public id: string = '';
    public containerId: string = '';
    public companyId: string = '';
    public name: string = '';
    public doc: string = '';
    public docType: EDocType = EDocType.CPF;
    public externalRef: string | null = null;
    public email: string | null = null;
    public phoneNumber: string | null = null;
    public internationalCode: string | null = null;
    public address: INatipayAddress | null = null;
    public billingCycle: ETabBillingCycle = ETabBillingCycle.MONTHLY;
    public creditLimit: number = 0;
    public requiresAuthCode: boolean = false;
    public authCodeHash: string | null = null;
    public blocked: boolean = false;
    public blockedReason: string | null = null;
    public discountPercent: number = 0;
    public surchargePercent: number = 0;
    public itemDiscounts: ITabCustomerItemDiscount[] = [];
    public notificationPreferences: ITabCustomerNotificationPreferences = new TabCustomerNotificationPreferencesEntity();
    public callbacks: ITabCustomerCallback[] = [];
    public activeInvoiceId: string | null = null;
    public invoiceSequence: number = 0;
    public tags: string[] = [];
    public active: boolean = true;
    public createdAt: Date = new Date();
    public updatedAt: Date = new Date();

    constructor(data?: Partial<TabCustomerEntity>) {
        if (data) {
            for (let key in data) {
                if (data.hasOwnProperty(key) && key in this) {
                    (this as any)[key] = (data as any)[key];
                }
            }
        }
    }
}
