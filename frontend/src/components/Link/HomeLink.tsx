import React from 'react';
import Link from "next/link";
import homelink from '../../../public/icon-nav-home.svg';
import Image from 'next/image';
import Logo from "@/assets/Logo";
import movieslink from "../../../public/icon-nav-movies.svg";
import HomeSV from '../../../public/icon-nav-home.svg'
import {useUserLocation} from "@/hooks/useUserLocation";
import {useUserLocationChange} from "@/hooks/useUserLocationChange";

const HomeLink: React.FC = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserLocation();
    const changeLocation = useUserLocationChange({ setCurrentUserLocation });

    return (
        <Link href={"/home"}>
            <Image onClick={() => changeLocation('Home')} className={`${currentUserLocation === 'Home' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`} width="16" height="16" priority src={homelink} alt={"Home"} />
        </Link>
    );
};

export default HomeLink;
