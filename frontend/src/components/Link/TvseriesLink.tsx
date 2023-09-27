import React from 'react';
import Link from "next/link";
import Image from "next/image";
import tvseriesLink from "../../../public/icon-nav-tv-series.svg";
import {useUserLocationChange} from "@/hooks/useUserLocationChange";
import {useUserLocation} from "@/hooks/useUserLocation";

const TvseriesLink = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserLocation();
    const changeLocation = useUserLocationChange({ setCurrentUserLocation });

    return (
        <Link href={"/tvseries"}>
            <Image
                onClick={() => changeLocation("Tvseries")}
                className={`${currentUserLocation === 'Tvseries' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                width="16" height="16" priority src={tvseriesLink} alt={"Home"} />
        </Link>
    );
};

export default TvseriesLink;
