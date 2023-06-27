import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [token, setToken] = useState(""); // State to store the JWT token

    return (
        <AppContext.Provider value={{ token, setToken }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
