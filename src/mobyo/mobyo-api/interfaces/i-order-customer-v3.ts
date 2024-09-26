
// #region interfacees (2)

export interface IOrdersCustomerPhone {
    // #region Properties (4)

    
    description: String;
    
    localizer: String;
    
    localizerExpiration: String;
    
    number: String;

    // #endregion Properties (4)
}

export interface IOrderCustomerV3 {
    // #region Properties (7)

    
    documentNumber: string;
    
    email: string;
    
    id: string;
    
    name: string;
    
    ordersCountOnMerchant: number;
    
    phone: IOrdersCustomerPhone;
    
    picture: string;

    // #endregion Properties (7)
}

// #endregion interfacees (2)

// #region Functions (3)