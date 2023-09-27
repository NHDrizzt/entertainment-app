import React from 'react';
import Link from "next/link";
import Image from "next/image";
import bookmark from "@/assets/icon-nav-bookmark.svg";

const Bookmark = () => {
    return (
        <Link href={"/bookmark"}>
            <Image width="16" height="16" priority src={bookmark} alt={"Home"} />
        </Link>
    );
};

export default Bookmark;
