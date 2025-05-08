import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#4A235A] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#B08968] p-8 rounded-lg mx-4 md:mx-8 lg:mx-16 -mb-20 relative z-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-[#1A1A1A] text-4xl font-bold mb-2">
              Subscribe To
            </h2>
            <h2 className="text-[#1A1A1A] text-4xl font-bold mb-4">
              Our Newsletter
            </h2>
            <p className="text-[#1A1A1A] text-lg">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          </div>
          <div className="flex-1 flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-black"
            />
            <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-md hover:bg-[#333] transition-colors">
              SUBSCRIBE
            </button>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://www.indiagodigital.in/assets/images/contact-us.png"
              alt="Newsletter"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="container mx-auto pt-32 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Social */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">SmartTrip</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022z" />
                </svg>
              </a>
              <a href="#" className="hover:text-gray-300">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Our Destinations */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Our Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/new-delhi"
                  className="hover:text-gray-300"
                >
                  New Delhi
                </Link>
              </li>
              <li>
                <Link href="/destinations/bali" className="hover:text-gray-300">
                  Bali
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/singapore"
                  className="hover:text-gray-300"
                >
                  Singapore
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/europe"
                  className="hover:text-gray-300"
                >
                  Europe
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Tours */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Our Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tours/northern-lights"
                  className="hover:text-gray-300"
                >
                  Northern Lights
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/cruising-sailing"
                  className="hover:text-gray-300"
                >
                  Cruising & sailing
                </Link>
              </li>
              <li>
                <Link
                  href="/tours/multi-activities"
                  className="hover:text-gray-300"
                >
                  Multi-activities
                </Link>
              </li>
              <li>
                <Link href="/tours/kayaing" className="hover:text-gray-300">
                  Kayaing
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Blogs */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Travel Blogs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs/bali-guide" className="hover:text-gray-300">
                  Bali Travel Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/sri-lanka-guide"
                  className="hover:text-gray-300"
                >
                  Sri Lanka Travel Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs/peru-guide" className="hover:text-gray-300">
                  Peru Travel Guide
                </Link>
              </li>
              <li>
                <Link href="/blogs/bali-guide" className="hover:text-gray-300">
                  Bali Travel Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/work-with-us"
                  className="hover:text-gray-300"
                >
                  Work with us
                </Link>
              </li>
              <li>
                <a href="tel:+919999999999" className="hover:text-gray-300">
                  +91 99999 99999
                </a>
              </li>
              <li>
                <a
                  href="mailto:tempmail@gmail.com"
                  className="hover:text-gray-300"
                >
                  tempmail@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
