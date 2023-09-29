'use client';
import {createContext, useContext, useState, ReactNode} from 'react';

import {UserContext} from "@/context/UserContext";

const UserContextProvider = ({children}: {children: ReactNode}) => {

    const [currentUserLocation, setCurrentUserLocation] = useState<string>("Home");
    const [currentUserInput, setCurrentUserInput] = useState<string>("");

    const updateUserInput = (input: string) => {
        setCurrentUserInput(input);
    }

    const values = {
        currentUserLocation,
        setCurrentUserLocation,
        currentUserInput,
        updateUserInput,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);
