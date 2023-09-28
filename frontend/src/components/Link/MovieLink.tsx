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
            <div className="w-4 h-4 md:w-full md:h-full">
                <Image onClick={() => changeLocation("Movies")}
                       className={`${currentUserLocation === 'Movies' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                       priority src={movieslink} alt={"Home"} />
            </div>
        </Link>
    );
};

export default MovieLink;
