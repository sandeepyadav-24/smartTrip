"use client";
import React from "react";

const tabs = ["Cheapest", "Recommended", "Fastest", "Other sort"];

const FlightSortTabs = () => {
  const [activeTab, setActiveTab] = React.useState(1); // Recommended by default

  return (
    <div className="flex items-center justify-between border-b border-gray-200 mb-4">
      <div className="flex gap-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`pb-2 font-medium text-sm border-b-2 transition-all ${
              activeTab === idx
                ? "border-[#A08D5F] text-[#A08D5F]"
                : "border-transparent text-gray-500 hover:text-[#A08D5F]"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
            <span className="block text-xs text-gray-400 font-normal mt-1">
              {tab === "Cheapest" && "$99 . 2h 18m"}
              {tab === "Recommended" && "$99 . 2h 18m"}
              {tab === "Fastest" && "$99 . 2h 18m"}
            </span>
          </button>
        ))}
      </div>
      <div>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by Recommended</option>
          <option>Sort by Price</option>
          <option>Sort by Duration</option>
        </select>
      </div>
    </div>
  );
};

export default FlightSortTabs;
