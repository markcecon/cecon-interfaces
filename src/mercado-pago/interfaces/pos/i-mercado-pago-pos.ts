export interface IMercadoPagoPos {
    id: number;
    qr: {
        image: string;
        template_document: string;
        template_image: string;
    };
    status: string;
    date_created: string;  // Alterado de Date para string
    date_last_updated: string;  // Alterado de Date para string
    uuid: string;
    compatible_id: string;
    user_id: number;
    name: string;
    fixed_amount: boolean;
    store_id: number;  // Novo campo
    external_store_id?: string;  // Novo campo (opcional)
    external_id: string;
    site: string;
    qr_code: string;  // Removido "?" se for sempre presente
}