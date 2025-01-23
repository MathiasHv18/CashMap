export interface loginUserRequest{
    mail: string;
    password: string;
}

export interface loginUserResponse{
    token: string;
    firstName: string;
    lastName: string;
    role: string;
}