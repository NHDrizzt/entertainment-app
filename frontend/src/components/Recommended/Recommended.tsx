import React from 'react';
import data from "@/json/data.json";
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";

const Recommended = () => {
    const recommendeds = data.filter((item) => !item.thumbnail.trending);
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
                            isTrending={item.isTrending} />
                    ))
                }
            </div>

        </div>
    );
};

export default Recommended;
