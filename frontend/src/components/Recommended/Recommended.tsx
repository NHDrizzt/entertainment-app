import React, {useState} from 'react';
import data from "@/json/data.json";
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";
import {useUserContext} from "@/context/UserContextProvider";

const Recommended = () => {
    const [recommendeds, setRecommendeds] = useState(data.filter((item) => !item.thumbnail.trending));
    const { setUserBookmarks } = useUserContext();
    const toggleBookmark = (index: number) => {
        const updatedTrendingData = [...recommendeds];
        updatedTrendingData[index].isBookmarked = !updatedTrendingData[index].isBookmarked;
        setRecommendeds(updatedTrendingData);
        setUserBookmarks((prevUserBookmarks) => {
            const newUserBookmarks = [ ...prevUserBookmarks];
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
        <div>
            <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large py-6">Recommended for you</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 min-w-[350px] max-w-[370px] md:max-w-[719px] xl:grid-cols-4 xl:max-w-[1280px] xxl:grid-cols-5 xxl:max-w-[1620px]">
                {

                    recommendeds.map((item, index) => (
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
                            onBookmarkToggle={() => toggleBookmark(index)}
                            isTrending={item.isTrending}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Recommended;
