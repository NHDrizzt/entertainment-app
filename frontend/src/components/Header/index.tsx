'use client'
import React from 'react';

import MovieLink from "@/components/Link/MovieLink";
import HomeLink from "@/components/Link/HomeLink";
import TvseriesLink from "@/components/Link/TvseriesLink";
import Bookmark from "@/components/Link/Bookmark";
import Image from 'next/image';
import profilePic from '../../assets/image-avatar.png';
import logoPic from '../../assets/logo.svg';
import {useUserContext} from "@/context/UserContextProvider";

const Header = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserContext();

    return (
        <header className="flex justify-between p-4 bg-semiDark items-center">
            <Image width={"24"} height={"24"} src={logoPic} alt={"Profile"} />
            <div className="flex gap-6">
                <HomeLink />
                <MovieLink />
                <TvseriesLink />
                <Bookmark />
            </div>
            <Image width={"24"} height={"24"} src={profilePic} alt={"Profile"} />
        </header>
    );
};

export default Header;
