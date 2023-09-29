'use client';
import data from '../../json/data.json';
import TrendingCard from "@/components/TrendingCard/TrendingCard";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import Recommended from "@/components/Recommended/Recommended";
import Trending from "@/components/Trending/Trending";
import { useUserContext } from "@/context/UserContextProvider";
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";

export default function Home() {
    const { currentUserInput } = useUserContext();

    const filteredData = data.filter((item) => item.title.toLowerCase().includes(currentUserInput.toLowerCase()));

    return (
        <div className="pt-6 pl-4 xl:pl-0">
            {
                currentUserInput.length > 0 ? (
                    <>
                        {
                            filteredData.length > 0
                                ? (
                                    <>
                                        <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">Search results for "{currentUserInput}"</h1>
                                        <motion.div className="flex flex-wrap gap-4 pt-4 md:pt-6 md:gap-10">
                                            {
                                                filteredData.map((item, index) => (
                                                    <RecommendedCard
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
                                                        onBookmarkToggle={() => {}}
                                                        isTrending={item.isTrending}
                                                    />
                                                ))
                                            }
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">No results found for "{currentUserInput}"</h1>
                                    </>
                                )
                        }
                    </>
                ) : (
                    <>
                        <Trending />
                        <Recommended />
                    </>
                )
            }
        </div>
    );
}
