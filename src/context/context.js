import { useContext, createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext()

export const useAppContext = () => {
    const context = useContext(AppContext)
    
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider")
    }
    return context
}

export const AppContextProvider = ({children}) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    console.log(API_KEY)
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}