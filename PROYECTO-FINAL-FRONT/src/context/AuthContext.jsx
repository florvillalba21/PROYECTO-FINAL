import { createContext } from "react";


export const AuthContext = createContext()
export const ProviderAuth = AuthContext.Provider;
export const ConsumerAuth = AuthContext.Consumer;
