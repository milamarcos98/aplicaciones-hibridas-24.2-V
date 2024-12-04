import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    // cookies
    const auth = Cookies.get('jwToken') || null;

    useEffect(() => {
        if(auth){
            const decoded = jwtDecode(auth)
            console.log(decoded)
            setUser({
                name: decoded.usuario.name,
                id: decoded.usuario._id,
                username: decoded.usuario.username
            })
        }
    },[])

    const logoutUser = () => {
        setUser(null);
        Cookies.remove('jwToken')
    }

    return (
        <AuthContext.Provider value={{user, setUser, auth, logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}