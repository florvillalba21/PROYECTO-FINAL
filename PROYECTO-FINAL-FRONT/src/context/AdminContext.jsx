import React from "react";
import { createContext } from "react";

export const AdminContext = createContext({ mostrar: false, setMostrar: () => {} 
});