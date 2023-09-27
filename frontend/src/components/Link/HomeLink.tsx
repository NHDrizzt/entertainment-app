import React from 'react';
import Link from "next/link";
import homelink from '../../assets/icon-nav-home.svg';
import Image from 'next/image';
const HomeLink = () => {
    return (
        <Link href={"/home"}>
            <Image width="16" height="16" priority src={homelink} alt={"Home"} />
        </Link>
    );
};

export default HomeLink;
