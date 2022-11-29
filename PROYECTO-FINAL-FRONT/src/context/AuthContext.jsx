import React, { createContext } from "react";


export const AuthContext = React.createContext()
export const ProviderAuth = AuthContext.Provider;
export const ConsumerAuth = AuthContext.Consumer;
