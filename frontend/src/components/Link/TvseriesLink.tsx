import React from 'react';
import Link from "next/link";
import Image from "next/image";
import tvseriesLink from "@/assets/icon-nav-tv-series.svg";

const TvseriesLink = () => {
    return (
        <Link href={"/tvseries"}>
            <Image width="16" height="16" priority src={tvseriesLink} alt={"Home"} />
        </Link>
    );
};

export default TvseriesLink;
