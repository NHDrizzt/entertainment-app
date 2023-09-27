import React from 'react';

import MovieLink from "@/components/Link/MovieLink";
import NextLink from "@/components/Link";
import HomeLink from "@/components/Link/HomeLink";
import Tvseries from "@/components/Link/TvseriesLink";
import TvseriesLink from "@/components/Link/TvseriesLink";
import Bookmark from "@/components/Link/Bookmark";

const Header = () => {
    return (
        <div>
            <HomeLink />
            <MovieLink />
            <TvseriesLink />
            <Bookmark />
        </div>
    );
};

export default Header;
