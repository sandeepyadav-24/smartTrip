"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "John Deep",
    role: "Customer",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
    image: "/testimonials/john.jpg",
  },
  {
    id: 2,
    name: "Ally Gomez",
    role: "Customer",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
    image: "/testimonials/ally.jpg",
  },
  {
    id: 3,
    name: "Alex Bugg",
    role: "Customer",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
    image: "/testimonials/alex.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Customer",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus sit, explicabo provident hic distinctio molestias voluptates nobis alias placeat suscipit earum debitis recusandae voluptate illum expedita corrupti aliquid doloribus delectus?",
    image: "/testimonials/sarah.jpg",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#4A235A] text-white px-6 py-2 rounded-full mb-4">
            <h3 className="text-lg font-medium italic">
              Hear What Our Family Says
            </h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our fans say about us
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentSlide + offset) % testimonials.length;
              const testimonial = testimonials[index];
              return (
                <div
                  key={testimonial.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 relative mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#4A235A] w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
