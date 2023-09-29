import React from 'react';
import data from "@/json/data.json";
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";
import {useUserContext} from "@/context/UserContextProvider";

const Category = ({ type }: { type: string }) => {

    const { currentUserInput } = useUserContext();

    const filteredData = data.filter((item) => item.category === type);

    const filteredData2 = filteredData.filter((item) => item.title.toLowerCase().includes(currentUserInput.toLowerCase()));

    return (
        <main className="pt-6 pl-4 xl:pl-0">
            {
                currentUserInput.length > 0 ? (
                    <>
                        {
                            filteredData2.length > 0
                                ? (
                                    <>
                                        <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">Search results for "{currentUserInput}"</h1>
                                        <div className="flex flex-wrap gap-4 pt-4 md:pt-6 md:gap-10">
                                            {
                                                filteredData2.map((item, index) => (
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
                                                        isTrending={item.isTrending}
                                                    />
                                                ))
                                            }
                                        </div>
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
                        <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large pb-4 px-0">{type === "Movie" ? "Movies" : type}</h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 min-w-[350px] max-w-[370px] md:max-w-[719px] xl:grid-cols-4 xl:max-w-[1280px] xxl:grid-cols-5 xxl:max-w-[1620px]">
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
                                            isTrending={item.isTrending} />
                                    ))
                                }
                            </div>
                    </>
                )
            }

        </main>
    );
};

export default Category;
