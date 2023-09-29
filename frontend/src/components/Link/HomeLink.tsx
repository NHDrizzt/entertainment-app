import React from 'react';
import Link from "next/link";
import homelink from '../../../public/icon-nav-home.svg';
import Image from 'next/image';
import Logo from "@/components/Logo";
import movieslink from "../../../public/icon-nav-movies.svg";
import HomeSV from '../../../public/icon-nav-home.svg'
import {useUserLocation} from "@/hooks/useUserLocation";
import {useUserLocationChange} from "@/hooks/useUserLocationChange";

const HomeLink: React.FC = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserLocation();
    const changeLocation = useUserLocationChange({ setCurrentUserLocation });

    return (
        <Link href={"/home"}>
            <div className="w-4 h-4 md:w-full md:h-full">
                <Image onClick={() => changeLocation('Home')} className={`${currentUserLocation === 'Home' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                       priority src={homelink} alt={"Home"} />
            </div>
        </Link>
    );
};

export default HomeLink;
