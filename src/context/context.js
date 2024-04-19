import React, { useContext, createContext, useState, useEffect } from "react";
import Axios from "axios";

export const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    
    if (!context) {
        throw new Error("useAppContext debe ser utilizado dentro de un AppContextProvider");
    }
    return context;
};

export const AppContextProvider = ({ children }) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(API_KEY)
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("")
    
    const findNews = async() => {
        try {
            const response = await Axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            setNews(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findNews()
    }, [search]);

    return (
        <AppContext.Provider value={{ news, setSearch, findNews }}>
            {children}
        </AppContext.Provider>
    );
};
