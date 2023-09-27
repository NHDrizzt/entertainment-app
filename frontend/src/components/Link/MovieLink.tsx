import Link from 'next/link';
import Image from "next/image";
import movieslink from "@/assets/icon-nav-movies.svg";
import React from "react";

const MovieLink = () => {
    return (
        <Link href={"/movies"}>
            <Image width="16" height="16" priority src={movieslink} alt={"Home"} />
        </Link>
    );
};

export default MovieLink;
