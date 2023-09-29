'use client';
import data from '../../json/data.json';
import TrendingCard from "@/components/TrendingCard/TrendingCard";
import { motion } from 'framer-motion';
import {useEffect, useRef, useState} from "react";
import Recommended from "@/components/Recommended/Recommended";
import Trending from "@/components/Trending/Trending";

export default function Home() {
    return (
        <div className="pt-6 pl-4 xl:pl-0">
            <Trending />
            <Recommended />
        </div>
    );
}
