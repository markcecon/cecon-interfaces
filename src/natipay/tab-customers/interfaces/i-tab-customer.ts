import { EDocType } from '../../../general';
import { INatipayAddress } from '../../company';
import { ETabBillingCycle } from '../enums/tab-billing-cycle.enum';

export interface ITabCustomerNotificationChannelPreferences {
    newSale: boolean;
    payment: boolean;
    dueDate: boolean;
}

export interface ITabCustomerNotificationPreferences {
    whatsapp: ITabCustomerNotificationChannelPreferences;
    email: ITabCustomerNotificationChannelPreferences;
}

/**
 * Exceção de desconto/acréscimo por item: sempre que uma venda [set-conta]
 * contiver um item com esse `productId`, o ajuste é aplicado automaticamente
 * na fatura (um novo ITabInvoiceEntry de categoria ADJUSTMENT). Use
 * `discountPercent` (0-100) OU `discountAmount` (R$ fixo) para desconto —
 * se ambos vierem, `discountPercent` prevalece. Mesma regra para
 * `surchargePercent`/`surchargeAmount` (acréscimo).
 */
export interface ITabCustomerItemDiscount {
    productId: number;
    discountPercent: number | null;
    discountAmount: number | null;
    surchargePercent: number | null;
    surchargeAmount: number | null;
}

/**
 * Cliente cadastrado numa loja para o módulo de conta assinada (venda fiado).
 * Coleção Firestore: containers/{containerId}/companies/{companyId}/tab-customers
 */
export interface ITabCustomer {
    id: string;
    containerId: string;
    companyId: string;
    name: string;
    doc: string;
    docType: EDocType;
    email: string | null;
    phoneNumber: string | null;
    internationalCode: string | null;
    address: INatipayAddress | null;
    billingCycle: ETabBillingCycle;
    creditLimit: number;
    requiresAuthCode: boolean;
    authCodeHash: string | null;
    blocked: boolean;
    blockedReason: string | null;
    /**
     * Desconto (%) aplicado automaticamente no saldo total da fatura no
     * momento do fechamento (0-100, 0 = sem desconto).
     */
    discountPercent: number;
    /**
     * Acréscimo (%) aplicado automaticamente no saldo total da fatura no
     * momento do fechamento (0-100, 0 = sem acréscimo).
     */
    surchargePercent: number;
    /**
     * Exceções de desconto por item, aplicadas em toda venda [set-conta] que
     * contiver o item correspondente.
     */
    itemDiscounts: ITabCustomerItemDiscount[];
    notificationPreferences: ITabCustomerNotificationPreferences;
    activeInvoiceId: string | null;
    invoiceSequence: number;
    tags: string[];
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}
