'use client'
import React, {useState} from 'react';
import searchIcon from '../../../public/icon-search.svg';
import Image from 'next/image';
import {useUserContext} from "@/context/UserContextProvider";

const SearchBar = () => {
    const { currentUserInput, updateUserInput, currentUserLocation } = useUserContext();
    const placeholders: Record<string, string> = {
        Home: "Search for Movies or TV series",
        Movies: "Search for Movies",
        Tvseries: "Search for TV series",
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateUserInput(e.target.value);
    };

    return (
        <section>
            <div className="flex pt-6 px-4 gap-4 md:pt-0.5 md:px-6 xl:w-full xl:px-0">
                <div className="w-6 h-6 md:w-8 md:h-8">
                    <Image src={searchIcon} alt="Search Icon" />
                </div>
                <input className="w-full xl:min-w-[1200px] bg-transparent text-white focus:outline-none placeholder:opacity-50 placeholder:font-outfit
                placeholder:font-light placeholder:text-[16px] caret-redTomato font-outfit font-light text-[16px] md:text-[24px] md:placeholder:text-medium xl:w-[323px] xl:focus:border-b xl:pb-4 xl:focus:border-semiGray"
                       type="text"
                       placeholder={placeholders[currentUserLocation] || "Search for Movies or TV series"}
                       maxLength={100}
                       value={currentUserInput}
                       onChange={handleInputChange}/>
            </div>
        </section>
    );
};

export default SearchBar;
