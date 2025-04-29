import React from "react";
import Image from "next/image";

const Experience = () => {
  const stats = [
    {
      number: "12k+",
      label: "Successful Trips",
    },
    {
      number: "2k+",
      label: "Regular clients",
    },
    {
      number: "15",
      label: "Year experience",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[#4A235A] text-white px-6 py-2 rounded-full mb-4">
              <h3 className="text-lg font-medium italic">Experience</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              With our all experience
              <br />
              we will serve you
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              aliquam, hic tempora inventore suscipit unde.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#B08968] p-6 rounded-lg text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full h-[600px]">
              {/* Orange Circle Background */}
              <div className="absolute inset-0 bg-[#FF8C42] rounded-full transform scale-90" />

              {/* Main Image */}
              <div className="relative h-full">
                <Image
                  src="/experience/guide.png"
                  alt="Experienced Tour Guide"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Mountain Hiking Card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg flex items-center gap-4">
                <Image
                  src="/experience/mountain.jpg"
                  alt="Mountain Hiking"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">Mountain Hiking</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      See details + Join Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Dotted Line */}
              <svg
                className="absolute bottom-20 right-20 w-32 h-32 text-gray-300"
                fill="none"
                viewBox="0 0 100 100"
              >
                <path
                  d="M10 50 Q 25 25, 50 50 T 90 50"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
