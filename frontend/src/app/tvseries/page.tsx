'use client'
import HomeLink from 'next/link'
import data from "@/json/data.json";
import RecommendedCard from "@/components/RecommendedCard/RecommendedCard";
import React from "react";
import Category from "@/components/Category/Category";

export default function Tvseries() {
    return (
        <Category type="TV Series" />
    )
}
