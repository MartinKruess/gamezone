import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../global/useContext";


export const PrivateRoute = ({ children }) => {
    const {auth} = useContext(AppContext)
    return auth ? children : <Navigate to="/login" replace/>
}