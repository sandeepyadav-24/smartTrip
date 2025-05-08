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
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr2e-89jpAKpb3hDF_cgC8yA9eXNbA8gbpYkJuy9xLWO9Lm_HSu2RIDzD_c-ra3OnOeqUK1W4BuWQ9w2WTTqc2_X7AKETjj0BcCSh6dpMoGPm52yFMpDvoO-tfITg5Sp4DbB-PL=s1360-w1360-h1020-rw",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 2,
    name: "Bali",
    country: "INDONESIA",
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nroCGNLI2ZkdWLluJQ7LqMGcIFnoGRfZckD4VypHxBgfZlzVVNgPcHwX2kB8kMy79DvMaY0D17tMg-mkt1t-rBURa6X8fiJroCca4214GNzXieIVgWldg7MiOg5PLr5Ji0N5He2=s1360-w1360-h1020-rw",
    gridClass: "col-span-1 row-span-2",
  },
  {
    id: 3,
    name: "Sydney",
    country: "Australia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Sydney_Opera_House_with_city.jpg/330px-Sydney_Opera_House_with_city.jpg",
    gridClass: "col-span-2 row-span-1",
  },
  {
    id: 4,
    name: "Dubai",
    country: "UAE",
    image: "https://www.holidify.com/images/tooltipImages/DUBAI.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 5,
    name: "Phetchabun",
    country: "THAILAND",
    image:
      "https://traveltradejournal.com/wp-content/uploads/2023/11/Thailand-Phetchabun.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 6,
    name: "Paris",
    country: "FRANCE",
    image:
      "https://images.hdqwalls.com/download/paris-france-eiffel-tower-night-m2-1336x768.jpg",
    gridClass: "col-span-1 row-span-1",
  },
  {
    id: 7,
    name: "Wuxi",
    country: "CHINA",
    image:
      "https://img.freepik.com/free-photo/city-scenery-traffic-flow-wuxi-industrial-park-night_1127-3894.jpg",
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
