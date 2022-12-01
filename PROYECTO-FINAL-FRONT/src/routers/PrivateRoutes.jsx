import React ,{ useContext } from "react";
import {Navigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({children})=>{
    const  token = useContext(AuthContext)
    console.log(token)

    return !token
    ?<Navigate to='/'/> : children; 
}