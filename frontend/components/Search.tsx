"use client";
import React, { useState, ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

const tabs: Tab[] = [
  {
    id: "flights",
    label: "Flights",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.56 3.34a4 4 0 0 0-5.66 0l-1.8 1.8-7.02 7.02-3.76 3.76a2 2 0 0 0 2.83 2.83l3.76-3.76 7.02-7.02 1.8-1.8a4 4 0 0 0 0-5.66l-1.8 1.8a2 2 0 0 1 0 2.83l-1.8 1.8L8.93 13.1l-1.41-1.41L13.1 8.93l1.8-1.8a2 2 0 0 1 2.83 0l1.8-1.8z" />
      </svg>
    ),
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm-6 8H3v-2h10v2zm10-4c0 1.1-.9 2-2 2h-2V9h2c1.1 0 2 .9 2 2z" />
      </svg>
    ),
  },
  {
    id: "cruises",
    label: "Cruises",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.9-6.68c.11-.37.04-1.06-.66-1.28L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.63.19-.81.84-.66 1.28L3.95 19z" />
      </svg>
    ),
  },
  {
    id: "packages",
    label: "Packages",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z" />
      </svg>
    ),
  },
  {
    id: "cabs",
    label: "Cabs",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
      </svg>
    ),
  },
];

export default function Search() {
  const [activeTab, setActiveTab] = useState("flights");
  const [isTabsOpen, setIsTabsOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 sm:py-12">
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
              className={`flex flex-col items-center gap-2 px-6 py-2 transition-colors relative ${
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
            Show Flights
          </button>
        </div>
      </div>
    </section>
  );
}
