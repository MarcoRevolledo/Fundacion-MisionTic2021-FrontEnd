import { createContext, useState } from "react";
import { Redirect } from "react-router";
import APIInvoke from "../utils/APIInvoke";

export const AuthContext= createContext();

const AuthProvider = ({children}) =>{
    const[user, setUser]= useState(null)

    const contextValue={
        user,
        Login(UsuarioLogueado){
            const usuario= JSON.parse(APIInvoke.invokeGET('/api/v1/padrino/'+UsuarioLogueado.email))
            
            if(usuario.password===UsuarioLogueado.password){
                setUser({
                    email: usuario.email,
                });
            }else{
                <Redirect to="/error"></Redirect>
            }
            
            
        },
        Logout(){
            setUser(null);
        }

    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider;