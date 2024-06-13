
export interface UserLogin{
    userName: string;
    password: string;
}

export interface AuthState {
    isAuthenticated: boolean,
    userToken?: string, 
    error?: string,
    success?: boolean,
    role?: string,
}

export interface AccountInformation {
    userName: string,
    firstName: string,
    midleName: string,
    lastName: string,
    dateOfBirth: string,
    age?: number,
    address: string[],
    email: string[],
    phone: string[],
    role: string,
}
