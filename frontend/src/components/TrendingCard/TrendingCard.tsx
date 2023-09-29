import React, {FC} from 'react';
import bookmark from '../../../public/icon-bookmark-empty.svg';
import Image from 'next/image';
import imagesTest from '../../../public/thumbnails/beyond-earth/trending/small.jpg'
import { motion } from 'framer-motion';


interface CardProps {
    title: string;
    thumbnail: {
        trending: {
            small: string;
            large: string;
        }
        regular: {
            small: string,
            medium: string,
            "large": string
        };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

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

    const backgroundImageStyle = {
        backgroundImage: `url('${small}')`
    };

    return (
        <motion.div style={backgroundImageStyle} className={`relative bg-cover bg-no-repeat w-[240px] h-[140px] min-w-[240px] rounded-md gap-4`}>
            <div className="absolute right-0 p-2 m-2 bg-semiDark/50 rounded-full">
                <Image src={bookmark} alt={"bookmark icon"}/>
            </div>
            <div className="absolute bottom-0 p-4">
                <div className="flex text-xs font-light font-outfit opacity-75 text-white gap-x-2">
                    <p>{year}</p>
                    <p>·</p>
                    <p>{category}</p>
                    <p>·</p>
                    <p>{rating}</p>
                </div>
                <p className="text-white text-small font-outfit font-regular break-words">{title}</p>
            </div>
        </motion.div>
    );
};

export default TrendingCard;
