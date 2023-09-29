'use client';
import data from '../../json/data.json';
import TrendingCard from "@/components/TrendingCard/TrendingCard";
import { motion } from 'framer-motion';
import {useEffect, useRef, useState} from "react";

interface CardProps {
    title: string;
    thumbnail: {
        trending: {
            small: string;
            large: string;
        };
    };
    regular: {
        small: string,
        medium: string,
        "large": string
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export default function Home() {

    const carouselSettings = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselSettings.current) {
            setWidth(carouselSettings.current.scrollWidth - carouselSettings.current.offsetWidth);
        }}, [])

    const trendingData = data.filter((item) => item.thumbnail.trending);

    return (
        <div className="pt-6 pl-4">
            <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md: text-large">Trending</h1>
            <motion.div className="app">
                <motion.div ref={carouselSettings} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing"}}>
                    <motion.div className="flex shrink gap-x-4 pt-4 md:pt-6 md:gap-x-10" drag={"x"} dragConstraints={{right: 0, left: -width}}>
                        {trendingData.map((item, index) => (
                            <TrendingCard
                                key={index}
                                title={item.title}
                                thumbnail={
                                    item.thumbnail.trending
                                        ? item.thumbnail
                                        : {
                                            trending: {
                                                small: "",
                                                large: "",
                                            },
                                            regular: item.thumbnail.regular,
                                        }
                                }
                                year={item.year}
                                category={item.category}
                                rating={item.rating}
                                isBookmarked={item.isBookmarked}
                                isTrending={item.isTrending}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
