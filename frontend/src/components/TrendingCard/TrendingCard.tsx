import React, {FC, useState} from 'react';
import bookmark from '../../../public/icon-bookmark-empty.svg';
import bookmarkFilled from '../../../public/icon-bookmark-full.svg'
import Image from 'next/image';
import imagesTest from '../../../public/thumbnails/beyond-earth/trending/small.jpg'
import { motion } from 'framer-motion';
import useScreenWidth from "@/hooks/useScreenWidth";
import moviesIcon from "../../../public/icon-nav-movies2.svg";
import tvseriesIcon from "../../../public/icon-nav-tv-series2.svg";




const TrendingCard: FC<CardProps> = (
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
        isTrending}) => {

    const currentScreenWidth = useScreenWidth();
    const [isBooked, setIsBooked] = useState(false);
    const backgroundImageStyle = {
        backgroundImage: `url('${currentScreenWidth < 768 ? small : large}')`
    };

    const handleBookmark = () => {
        setIsBooked(!isBooked);
    }

    return (
        <motion.div style={backgroundImageStyle} className={`relative bg-cover bg-no-repeat w-[240px] md:w-[470px] h-[140px] md:h-[230px] min-w-[240px] md:min-w-[470px] rounded-md gap-4`}>
            <div className="absolute right-0 p-2 m-2 bg-semiDark/50 rounded-full md:mt-4 md:mr-6 md:p-3" onClick={handleBookmark}>
                <Image  src={!isBooked ? bookmark : bookmarkFilled} alt={"bookmark icon"}/>
            </div>
            <div className="absolute bottom-0 p-4 md:p-6">
                <div className="flex text-xs font-light font-outfit opacity-75 text-white gap-x-2 md:text-[15px] items-center">
                    <p>{year}</p>
                    <p>·</p>
                    <div className="h-3 w-3">
                        <Image src={category === "Movie" ? moviesIcon : tvseriesIcon} alt={category === "Movie" ? "Movie Icon" : 'TV Series Icon'} />
                    </div>
                    <p>{category}</p>
                    <p>·</p>
                    <p>{rating}</p>
                </div>
                <p className="text-white text-small font-outfit font-regular break-words md:text-medium">{title}</p>
            </div>
        </motion.div>
    );
};

export default TrendingCard;
