import {useCallback} from 'react';

interface UseUserLocationChangeProps {
    setCurrentUserLocation: (newLocation: string) => void;
}

export const useUserLocationChange = ({ setCurrentUserLocation }: UseUserLocationChangeProps) => {
    return useCallback((newLocation: string) => {
        setCurrentUserLocation(newLocation);
    }, [setCurrentUserLocation]);
};
