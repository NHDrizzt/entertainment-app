import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import TrendingCard from "@/components/TrendingCard/TrendingCard";
import data from "@/json/data.json";
import {useUserContext} from "@/context/UserContextProvider";

const Trending = () => {

    const [trendingData, setTrendingData] = useState(data.filter((item) => item.thumbnail.trending));
    const carouselSettings = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(0);
    const { setUserBookmarks } = useUserContext();

    useEffect(() => {
        if (carouselSettings.current) {
            setWidth(carouselSettings.current.scrollWidth - carouselSettings.current.offsetWidth);
        }}, [])

    const toggleBookmark = (index: number) => {
        const updatedTrendingData = [...trendingData];
        updatedTrendingData[index].isBookmarked = !updatedTrendingData[index].isBookmarked;
        setTrendingData(updatedTrendingData);
        setUserBookmarks((prevUserBookmarks) => {
            const newUserBookmarks = [...prevUserBookmarks];
            const newUserbookIndex = newUserBookmarks.indexOf(updatedTrendingData[index]);
            if (newUserbookIndex === -1) {
                newUserBookmarks.push(updatedTrendingData[index]);
            } else {
                newUserBookmarks.splice(newUserbookIndex, 1);
            }
            return newUserBookmarks;
        })
    };


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
                                onBookmarkToggle={() => toggleBookmark(index)}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Trending;
