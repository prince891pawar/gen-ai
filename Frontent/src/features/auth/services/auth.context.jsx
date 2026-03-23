import { createContext, useEffect, useState } from "react";
import { getMe } from "./auth.api";

export const AuthContext = createContext(); 

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)



    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}