
export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    // Говорим, что мы ждём объект с данными в IAddress
    address: IAddress;
}


export interface ITodos {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}