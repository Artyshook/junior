// Podle pravidel mají intefaces začínat písmenem I
// Pro popis datových struktur je vhodnější type
// Interface je vhodnější pro funkce a třídy
// odsazení má být 2 mezery
export interface AddressType {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

export interface CompanyType {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
}
