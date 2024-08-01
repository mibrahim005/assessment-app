"use client";

import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import MainBanner from "./components/MainBanner";
import { ScrollableSection } from "./components/ScrollableSection";
import "./globals.css";

export default function Home () {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPortfolioItems = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      setPortfolioItems(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  return (
    <div className="bg-gray-50 uppercase italic tracking-wide min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-x-6 lg:gap-4">
            <MainBanner items={portfolioItems} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-x-6 lg:gap-4 h-[600px]">
              <ScrollableSection items={portfolioItems} type="scroll_down_slider" />
              <ScrollableSection items={portfolioItems} type="scroll_up_slider" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
