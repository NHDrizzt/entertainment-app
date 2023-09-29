'use client';
import React from 'react';
import { useUserContext } from '@/context/UserContextProvider';
import data from '@/json/data.json';
import RecommendedCard from '@/components/RecommendedCard/RecommendedCard';

const Bookmarks = () => {
    const { currentUserInput, userBookmarks } = useUserContext();

    const filteredData = userBookmarks.filter((item) =>
        item.title.toLowerCase().includes(currentUserInput.toLowerCase())
    );

    // const handleBookmark = () => {
    //     onBookmarkToggle();
    // }

    const renderFilteredData = (category: string) => {

        const filteredByCategory = filteredData.filter(
            (movie) => movie.category === category
        );

        if (filteredByCategory.length === 0) {
            return (
                <>
                    <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">
                        No results found for {category}
                    </h1>
                </>
            );
        }


        return filteredByCategory.map((item, index) => (
            <RecommendedCard
                key={index}
                title={item.title}
                thumbnail={
                    item.thumbnail.trending
                        ? item.thumbnail
                        : {
                            trending: {
                                small: '',
                                large: '',
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
        ));
    };

    const renderContent = () => {
        if (currentUserInput.length > 0) {
            return (
                <>
                    <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">
                        Search results for "{currentUserInput}"
                    </h1>
                    <div className="flex flex-wrap gap-4 pt-4 md:pt-6 md:gap-10">
                        {renderFilteredData('Movie')}
                        {renderFilteredData('TV Series')}
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <>
                        {
                            userBookmarks.length === 0 ? (
                                <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large">
                                    No bookmarks found
                                </h1>
                            ) : (
                                <>
                                    <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large pb-4 px-0">
                                        Bookmarked Movies
                                    </h1>
                                    <div className="grid grid-cols-2 md:grid-cols-3 min-w-[350px] max-w-[370px] md:max-w-[719px] xl:grid-cols-4 xl:max-w-[1280px] xxl:grid-cols-5 xxl:max-w-[1620px]">
                                        {renderFilteredData('Movie')}
                                    </div>

                                    <h1 className="font-outfit font-light text-[20px] text-white tracking-tightest md:text-large pb-4 px-0">
                                        Bookmarked TV Series
                                    </h1>
                                    <div className="grid grid-cols-2 md:grid-cols-3 min-w-[350px] max-w-[370px] md:max-w-[719px] xl:grid-cols-4 xl:max-w-[1280px] xxl:grid-cols-5 xxl:max-w-[1620px]">
                                        {renderFilteredData('TV Series')}
                                    </div>
                                </>
                            )
                        }
                    </>
                </>
            );
        }
    };

    return <main className="pt-6 pl-4 xl:pl-0">{renderContent()}</main>;
};

export default Bookmarks;
