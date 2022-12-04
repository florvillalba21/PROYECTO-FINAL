import React ,{ useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Navigate} from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({children})=>{
    const {admin}= useContext(AuthContext)
    const [user = admin, setAdmin] = useState()
  

    return !user.token
    ?<Navigate to='/'/> : children; 
}