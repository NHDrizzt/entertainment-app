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
            <div className="w-4 h-4 md:w-full md:h-full">
                <Image
                    onClick={() => changeLocation("Tvseries")}
                    className={`${currentUserLocation === 'Tvseries' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                    priority src={tvseriesLink} alt={"Home"} />
            </div>

        </Link>
    );
};

export default TvseriesLink;
