'use client';
import {createContext} from "react";


interface UserContextType {
    currentUserLocation: string;
    setCurrentUserLocation: (location: string) => void;
    currentUserInput: string;
    updateUserInput: (input: string) => void;
}
export const UserContext = createContext<UserContextType>({
    currentUserLocation: "Home",
    setCurrentUserLocation: () => {},
    currentUserInput: "",
    updateUserInput: () => {},
});
