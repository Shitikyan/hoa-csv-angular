export interface BatchDetail {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;

    apn: string;
    refId: string;

    currentOwner: string;
    
    prop: BatchProp;
    latestSale: LatestSale;
    hoa: HOA;
}

export interface BatchProp {
    landUse: string;
    yearBuilt: number;
    subdivision: string;
    standardSubdivison: string;
    subdivision2: string;
    overrideSubdivision: string;
}

export interface LatestSale {
    condorider: string;
    pudrider: string;
}

export interface HOA {
    indicator: string;
    flag: string;
    number: number;
    comments: string[];
    hoas: HOADetails[];
}

export interface HOADetails {
    name: string;
    type: string;
    isMaster: boolean;
    hasMaster: boolean;
    voluntary: string;
    hasManagementCompany: boolean;

    contactName: string;
    contactType: string;
    mailingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    contactPhone: string;
    contactPhoneType: string;
    contactEmail: string;

    managementCompanyName: string;
    managementCompanyAddress: string;
    
    managementCompanyCity: string;
    managementCompanyState: string;
    managementCompanyZip: string;
    managementCompanyPhone: string;
    managementCompanyPhoneType: string;
    managementCompanyEmail: string;

    contactType2: string;
    lastVerified: Date;
    verifiedMethod: string;
}