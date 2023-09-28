'use client'
import React from 'react';
import searchIcon from '../../../public/icon-search.svg';
import Image from 'next/image';

const SearchBar = () => {
    return (
        <section>
            <div className="flex pt-6 px-4 gap-4 md:pt-0.5 md:px-6">
                <div className="w-6 h-6 md:w-8 md:h-8">
                    <Image src={searchIcon} alt="Search Icon" />
                </div>
                <input className="w-full bg-transparent text-white border border-transparent focus:outline-none placeholder:opacity-50 placeholder:font-outfit
                placeholder:font-light placeholder:text-[16px] caret-redTomato font-outfit font-light text-[16px] md:placeholder:text-medium" type="text" placeholder="Search for movies or TV series" maxLength={60} />
            </div>
        </section>
    );
};

export default SearchBar;
