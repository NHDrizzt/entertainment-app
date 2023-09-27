import Link from 'next/link';
import Image from "next/image";
import movieslink from "../../../public/icon-nav-movies.svg";
import React from "react";
import {useUserLocation} from "@/hooks/useUserLocation";
import {useUserLocationChange} from "@/hooks/useUserLocationChange";

const MovieLink = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserLocation();
    const changeLocation = useUserLocationChange({ setCurrentUserLocation });



    return (
        <Link href={"/movies"}>
            <Image onClick={() => changeLocation("Movies")}
                   className={`${currentUserLocation === 'Movies' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                   width="16" height="16" priority src={movieslink} alt={"Home"} />
        </Link>
    );
};

export default MovieLink;
