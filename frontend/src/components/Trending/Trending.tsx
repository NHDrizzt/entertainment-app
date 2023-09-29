import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import TrendingCard from "@/components/TrendingCard/TrendingCard";
import data from "@/json/data.json";

const Trending = () => {

    const trendingData = data.filter((item) => item.thumbnail.trending);

    const carouselSettings = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselSettings.current) {
            setWidth(carouselSettings.current.scrollWidth - carouselSettings.current.offsetWidth);
        }}, [])

    return (
        <>
            <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">Trending</h1>
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
        </>
    );
};

export default Trending;
