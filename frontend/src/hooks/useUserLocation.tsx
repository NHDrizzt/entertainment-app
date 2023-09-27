import {useUserContext} from "@/context/UserContextProvider";

export const useUserLocation = () => {
    const { currentUserLocation, setCurrentUserLocation } = useUserContext();
    return { currentUserLocation, setCurrentUserLocation };
};
