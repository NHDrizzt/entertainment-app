'use client';
import {createContext, useContext, useState, ReactNode} from 'react';

import {UserContext} from "@/context/UserContext";

const UserContextProvider = ({children}: {children: ReactNode}) => {

    const [currentUserLocation, setCurrentUserLocation] = useState<string>("Home");

    const values = {
        currentUserLocation,
        setCurrentUserLocation
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
