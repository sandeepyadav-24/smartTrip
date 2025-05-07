"use client";
import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function AboutUs() {
  const dummyRef = useRef<HTMLElement>(null as unknown as HTMLElement);
  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Calculate Weather",
      description: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      ),
      title: "Best Tour Guide",
      description: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Customization",
      description: "Lorem ipsum dolor sit amet, adipisicing elit.",
    },
  ];

  return (
    <div>
      <Navbar searchRef={dummyRef} />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold">
                Who <span className="text-[#B08968]">We Are?</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We&apos;re all about creating unforgettable experiences for our
                guests. Our journey began with a simple passion for exploring
                the beauty of the World.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                Our <span className="text-[#B08968]">Mission</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe that travel is not just about visiting new places,
                but about immersing yourself in new cultures, connecting with
                nature, and making memories that last a lifetime.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-us.jpg"
              alt="Beautiful landscape with boat"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-lg italic text-[#B08968]">What we serve</h3>
            <h2 className="text-4xl font-bold mt-2">
              We offer our best services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-8 right-8">
                  <div className="w-12 h-12 rounded-full bg-[#B08968] bg-opacity-20 flex items-center justify-center text-[#B08968]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-8">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
