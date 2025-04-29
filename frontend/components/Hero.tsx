import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-[#4A235A] text-white px-6 py-2 rounded-full mb-6">
              <h3 className="text-lg font-medium italic mr-2">
                Know Before You Go
              </h3>
              <span className="w-6 h-6">🌍</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#4A235A]">
                Traveling opens the door to
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                creating <span className="text-[#B08968]">memories</span>
              </span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              ipsum nobis asperiores soluta voluptas quas voluptates. Molestiae
              tempora dignissimos, animi praesentium molestias perferendis porro
              expedita delectus. Soluta natus porro.
            </p>
          </div>

          {/* Right Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {/* First Image - Mountain */}
              <div className="col-span-1 transform translate-y-12">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#B08968] shadow-xl">
                  <div className="aspect-[3/4]">
                    <Image
                      src="/hero/mountain.jpg"
                      alt="Mountain adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Second Image - Island */}
              <div className="col-span-1">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#B08968] shadow-xl">
                  <div className="aspect-[3/4]">
                    <Image
                      src="/hero/island.jpg"
                      alt="Island view"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Third Image - Museum */}
              <div className="col-span-1 transform translate-y-24">
                <div className="relative rounded-3xl overflow-hidden border-4 border-[#B08968] shadow-xl">
                  <div className="aspect-[3/4]">
                    <Image
                      src="/hero/museum.jpg"
                      alt="Museum architecture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FFD700] opacity-20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#B08968] opacity-20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
