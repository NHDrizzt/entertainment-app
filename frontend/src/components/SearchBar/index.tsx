'use client'
import React from 'react';
import searchIcon from '../../../public/icon-search.svg';
import Image from 'next/image';

const SearchBar = () => {
    return (
        <section>
            <div className="flex pt-6 px-4 gap-4">
                <div className="w-6 h-6">
                    <Image src={searchIcon} alt="Search Icon" />
                </div>
                <input className="w-full bg-transparent text-white focus:outline-none placeholder:opacity-50 placeholder:font-outfit placeholder:font-light placeholder:text-[16px] focus:caret-redTomato font-outfit font-light text-[16px]" type="text" placeholder="Search for movies or TV series"/>
            </div>
        </section>
    );
};

export default SearchBar;
