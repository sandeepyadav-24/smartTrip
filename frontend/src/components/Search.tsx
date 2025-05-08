"use client";
import React, { useState, ReactNode, forwardRef } from "react";
import { FaCar } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GiCruiser } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

const tabs: Tab[] = [
  {
    id: "flights",
    label: "Flights",
    icon: <FaPlaneDeparture />,
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: <FaHotel />,
  },
  {
    id: "cruises",
    label: "Cruises",
    icon: <GiCruiser />,
  },
  {
    id: "packages",
    label: "Packages",
    icon: <RiLuggageDepositFill />,
  },
  {
    id: "cabs",
    label: "Cabs",
    icon: <FaCar />,
  },
];

const Search = forwardRef<HTMLElement, any>((props, ref) => {
  const [activeTab, setActiveTab] = useState("flights");
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
      <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Mobile Tab Selector */}
        <div className="sm:hidden mb-6">
          <button
            onClick={() => setIsTabsOpen(!isTabsOpen)}
            className="w-full flex items-center justify-between px-4 py-3 border rounded-lg bg-gray-50"
          >
            <div className="flex items-center gap-2">
              {tabs.find((t) => t.id === activeTab)?.icon}
              <span className="font-medium">
                {tabs.find((t) => t.id === activeTab)?.label}
              </span>
            </div>

            <svg
              className={`w-5 h-5 transition-transform ${
                isTabsOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isTabsOpen && (
            <div className="mt-2 border rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsTabsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-3 text-sm ${
                    activeTab === tab.id
                      ? "bg-[#B08968] text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden sm:flex justify-center gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col text-2xl items-center gap-2 px-6 py-2 transition-colors relative ${
                activeTab === tab.id
                  ? "text-[#B08968] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#B08968]"
                  : "text-gray-500 hover:text-[#B08968]"
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Where are you flying?
        </h2>

        {/* Flight Search Form */}
        <div className="space-y-6">
          {/* From - To */}
          <div className="relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  From
                </label>
                <input
                  type="text"
                  placeholder="Delhi"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
                />
              </div>

              {/* Exchange Icon */}
              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
                <svg
                  className="w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  To
                </label>
                <input
                  type="text"
                  placeholder="Dubai"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Trip Type */}
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Trip
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent">
                <option>Return</option>
                <option>One Way</option>
                <option>Multi-City</option>
              </select>
            </div>

            {/* Depart - Return */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Depart - Return
              </label>
              <input
                type="text"
                placeholder="07 Nov 22 - 13 Nov 22"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
              />
            </div>

            {/* Passenger - Class */}
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Passenger - Class
              </label>
              <input
                type="text"
                placeholder="1 Passenger, Economy"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#B08968] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-[#B08968] text-white px-8 py-3 rounded-lg hover:bg-[#97775A] transition-colors flex items-center gap-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.56 3.34a4 4 0 0 0-5.66 0l-1.8 1.8-7.02 7.02-3.76 3.76a2 2 0 0 0 2.83 2.83l3.76-3.76 7.02-7.02 1.8-1.8a4 4 0 0 0 0-5.66l-1.8 1.8a2 2 0 0 1 0 2.83l-1.8 1.8L8.93 13.1l-1.41-1.41L13.1 8.93l1.8-1.8a2 2 0 0 1 2.83 0l1.8-1.8z" />
            </svg>
            <Link href="/flights">Show Flights</Link>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Search;
