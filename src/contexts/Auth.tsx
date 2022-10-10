import React from "react";

import type { Auth } from "../schema/Auth";
import type { SignInValues } from "../schema/SignInValues"

interface Props {
    children : React.ReactElement
}

export const AuthContext = React.createContext<Auth>({} as Auth);

const AuthProvider = ( props:Props) => {
    const [isLoggedIn, setLoggedIn] = React.useState<boolean>(localStorage.getItem("isLoggedIn") === "true");

    const signIn = React.useCallback(async ({username, password}: SignInValues) => {
        if(username && password) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false);
        }
    }, []);
    
    const signOut = React.useCallback(async () => {
        setLoggedIn(false);
    }, []);

    React.useEffect(() => {        
        localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider {...props} value={{isLoggedIn , signIn, signOut}} />
    )
}

export default AuthProvider;
