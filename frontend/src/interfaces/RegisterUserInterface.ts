export interface registerUserRequest{
    name: string;
    mail: string;
    password: string;
    lastname: string;
}

export interface registerUserResponse{
    id: Number,
    mail: string,
    name: string,
    lastname: string,
    age: number,
    fisicalMoney: Number;
    digitalMoney: Number;
}