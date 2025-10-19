import { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token)
        {
            setInitialized(true);
            return;
        }

        try
        {
            setUserData(JSON.parse(token));
        }
        catch (error)
        {
            setUserData(null);
        }
        finally
        {
            setInitialized(true);
        }
    }, []);

    return(
        <UserContext.Provider value={{ userData, initialized }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserData = () => useContext(UserContext);