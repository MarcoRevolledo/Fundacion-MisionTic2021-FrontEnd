import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function  useAuth(params) {
    const contextValue= useContext(AuthContext)
    return contextValue;
}