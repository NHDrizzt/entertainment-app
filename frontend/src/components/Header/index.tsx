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
    return (
        <header className="flex justify-between p-4 bg-semiDark items-center md:m-6 md:rounded-[10px] xl:h-[960px] xl:flex-col xl:m-8 xl:p-8 xl:justify-start ">
            <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]">
                <Image src={logoPic} alt={"Profile"} />
            </div>
            <div className="flex gap-6 md:gap-8 xl:h-full xl:flex-col xl:pt-[74px]">
                <HomeLink />
                <MovieLink />
                <TvseriesLink />
                <Bookmark />
            </div>
            <div className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] xl:w-[40px] xl:h-[40px]">
                <Image src={profilePic} alt={"Profile"} />
            </div>
        </header>
    );
};

export default Header;
