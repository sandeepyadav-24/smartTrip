"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TourDestination {
  id: number;
  name: string;
  country: string;
  image: string;
  gridClass: string;
}

const destinations: TourDestination[] = [
  {
    id: 1,
    name: "Big Ben",
    country: "LONDON",
    image: "/destinations/london.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 2,
    name: "Bali",
    country: "INDONESIA",
    image: "/destinations/bali.jpg",
    gridClass: "col-span-1 row-span-2",
  },
  {
    id: 3,
    name: "Sydney",
    country: "Australia",
    image: "/destinations/sydney.jpg",
    gridClass: "col-span-2 row-span-1",
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    image: "/destinations/dubai.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 5,
    name: "Phetchabun",
    country: "THAILAND",
    image: "/destinations/phetchabun.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 6,
    name: "Paris",
    country: "FRANCE",
    image: "/destinations/paris.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 7,
    name: "Wuxi",
    country: "CHINA",
    image: "/destinations/wuxi.jpg",
    gridClass: "col-span-1 row-span-1",
  },
];

const Explore = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-[#4A235A] text-white px-6 py-2 rounded-full mb-4">
            <h3 className="text-lg font-medium italic">Explore</h3>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Our featured tours
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {destinations.map((destination) => (
            <Link
              href={`/destinations/${destination.name.toLowerCase()}`}
              key={destination.id}
              className={`relative group overflow-hidden rounded-2xl ${destination.gridClass}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              </div>

              {/* Content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-semibold italic mb-1">
                  {destination.name}
                </h3>
                <p className="text-sm tracking-wider">{destination.country}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#4A235A] text-white p-4 rounded-full shadow-lg hover:bg-[#3A1C45] transition-colors duration-300"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Explore;
