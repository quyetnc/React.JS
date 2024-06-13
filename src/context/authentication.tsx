import React, { ReactElement, createContext, useContext, useEffect, useMemo, useState } from 'react'
// import { jwtDecode } from "jwt-decode";
import { UserLogin } from '../models/Auth';

const AuthContext = createContext<string | null>(null);

// interface AuthProviderProps {
//     children: React.ReactNode;
// }
// const AuthProvider : React.FC<AuthProviderProps> = ({ children }) => {

const AuthProvider = ({ children }: { children: ReactElement }) => {
    // State to hold the authentication token
    const [token, setToken] = useState<string | null>(localStorage.getItem("token_JWT"));

    useEffect(() => {
        if (token) {
            localStorage.setItem("token_JWT", token);
        } else {
            localStorage.removeItem("token_JWT");
        }
    }, [token]);

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            token,
        }),
        [token]
    );

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue.token}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const token = useContext(AuthContext);
    return token !== null

};

export const useUserLogin = () => {
    const token = useContext(AuthContext);
    if (token) {
        // const decoded: any = jwtDecode(token);
        const userLogin = Object()
        // userLogin.userName = decoded.userName;
        // userLogin.email = decoded.email;
        // userLogin.role = decoded.role;
        userLogin.userName = "decoded.userName";
        userLogin.email = "decoded.email";
        userLogin.role = "decoded.role";
        return userLogin;
    }
    return null

};

export default AuthProvider;