"use client";
import Banner from "@/components/Banner";
import PlayBubble from "@/components/CartBubble";
import GenresSection from "@/components/GenresSection";
import { series as initialSeries } from "@/data/series";
import { useState } from "react";

export default function Home() {
  const [series, setSeries] = useState(initialSeries);
  const [showSeries, setShowSeries] = useState(true);

  return (
    <div className="bg-gray-800 min-h-screen">
      <Banner></Banner>
      <GenresSection/>
      <PlayBubble></PlayBubble>
    </div>
  );
}
