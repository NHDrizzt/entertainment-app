'use client'
import MoviesLink from 'next/link'
import React from "react";
import data from '../../json/data.json';
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";
import Category from "@/components/Category/Category";
export default function Movies() {
    return (
        <Category type="Movie" />
    )
}
