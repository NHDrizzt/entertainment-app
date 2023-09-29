import React, {FC, useState} from 'react';
import useScreenWidth from "@/hooks/useScreenWidth";
import Image from "next/image";
import moviesIcon from "../../../public/icon-nav-movies2.svg";
import tvseriesIcon from "../../../public/icon-nav-tv-series2.svg";
import bookmark from "../../../public/icon-bookmark-empty.svg";
import bookmarkFilled from "../../../public/icon-bookmark-full.svg";

const RecommendedCard:FC<CardProps> = (
    {   title,
        thumbnail: {
            trending: {
                small,
                large
            },
            regular: {
                small: smallRegular,
                medium: mediumRegular,
                large: largeRegular
            }
        },
        year,
        category,
        rating,
        isBookmarked,
        onBookmarkToggle,
        isTrending})  => {

    const currentScreenWidth = useScreenWidth();

    const backgroundImageStyle = {
        backgroundImage: `url('${currentScreenWidth < 768 ? smallRegular : mediumRegular}')`
    };

    const handleBookmark = () => {
        onBookmarkToggle();
    }

    return (
        <div className="w-fit">
            <div style={backgroundImageStyle} className="relative bg-cover bg-no-repeat w-[164px] h-[110px] rounded-md md:w-[220px] md:h-[140px] xl:w-[280px] xl:h-[174px]">
                <div className="absolute right-0 p-2 m-2 bg-semiDark/50 rounded-full md:mt-4 md:mr-4 md:p-2.5" onClick={handleBookmark}>
                    <Image  src={!isBookmarked ? bookmark : bookmarkFilled} alt={"bookmark icon"}/>
                </div>            </div>
            <div className="pt-2 pb-4 xl:pb-6">
                <div className="flex text-xs font-light font-outfit opacity-75 text-white gap-x-2 md:text-[13px] items-center">
                    <p>{year}</p>
                    <p>·</p>
                    <div className="w-[10px] h-[10px]">
                        <Image src={category === "Movie" ? moviesIcon : tvseriesIcon} alt={category === "Movie" ? "Movie Icon" : 'TV Series Icon'} />
                    </div>
                    <p>{category}</p>
                    <p>·</p>
                    <p>{rating}</p>
                </div>
                <p className="text-white text-small font-outfit font-regular break-words md:text-[18px]">{title}</p>
            </div>
        </div>

    );
};

export default RecommendedCard;
