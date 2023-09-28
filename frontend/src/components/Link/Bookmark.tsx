import React from 'react';
import Link from "next/link";
import Image from "next/image";
import bookmark from "../../../public/icon-nav-bookmark.svg";
import {useUserLocation} from "@/hooks/useUserLocation";
import {useUserLocationChange} from "@/hooks/useUserLocationChange";

const Bookmark = () => {

    const { currentUserLocation, setCurrentUserLocation } = useUserLocation();
    const changeLocation = useUserLocationChange({ setCurrentUserLocation });


    return (
        <Link href={"/bookmark"}>
            <div className="w-4 h-4 md:w-full md:h-full">
                <Image
                    onClick={() => changeLocation("Bookmark")}
                    className={`${currentUserLocation === 'Bookmark' ? 'dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert' : ''}`}
                    priority src={bookmark} alt={"Home"} />
            </div>
        </Link>
    );
};

export default Bookmark;
