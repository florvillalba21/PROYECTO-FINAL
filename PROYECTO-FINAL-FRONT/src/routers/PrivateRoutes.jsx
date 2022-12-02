import React ,{ useContext } from "react";
import {Navigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({children})=>{
    const admin= useContext(AuthContext)
    console.log(admin.token)
    

    return !admin.token
    ?<Navigate to='/'/> : children; 
}